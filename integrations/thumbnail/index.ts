import { Worker, isMainThread } from "worker_threads";
import { fileURLToPath } from "url";
import { globby } from "globby";
import matter from "gray-matter";
import chalk from "chalk";
import path from "path";
import fs from "fs";

import type { AstroIntegration } from "astro";
import type { TMateri } from "../../src/content/config";

type integrationOptions = {
  chunks?: number;
};

export const thumbnailIntegration = (
  options?: integrationOptions | undefined,
): AstroIntegration => {
  const chunkSize = options?.chunks ?? 10;

  // Prepare root of this project
  const rootProject = path.join(fileURLToPath(import.meta.url), "../../..");

  return {
    name: "hinode-thumbnail-integration",

    hooks: {
      "astro:build:done": async ({ dir, pages, logger }) => {
        const publicOGs = path.join(fileURLToPath(dir), "ogs");

        // Init ogs directory
        if (!fs.existsSync(publicOGs)) fs.mkdirSync(publicOGs);

        // List all lessons
        const lessonsList = await globby(["./**/*.md"], {
          cwd: path.join(rootProject, "src/content/materi"),
        });

        // Extract lessons yaml
        const lessonsData = lessonsList.map((lessonPath) => ({
          data: matter(
            fs.readFileSync(
              path.join(rootProject, "src/content/materi", lessonPath),
              "utf8",
            ),
          ).data as TMateri,
          path: lessonPath.replace(".md", "/"),
        }));

        // Filter non external lessons
        const filterNonExternal = lessonsData.filter(
          (lesson) => !lesson.data.isExternal,
        );

        // Filter all pages that don't have any internal lessons
        const filteredPages = pages.filter(
          (d) =>
            !filterNonExternal.find((ext) => d.pathname.endsWith(ext.path)),
        );

        const OGs = [
          ...lessonsData.map((lesson) => {
            const pathSplitted = lesson.path.split("/");

            return {
              title: lesson.data.title,
              description: lesson.data.description,
              date: `${lesson.data.created_at
                .replace("-", "年 ")
                .replace("-", "月 ")}日`,
              path: pathSplitted[1],
            };
          }),
          ...filteredPages.map((page) => {
            return {
              title: `Halaman ${
                page.pathname === ""
                  ? "Utama"
                  : page.pathname.replaceAll("/", " ")
              }`,
              description:
                page.pathname === ""
                  ? "Utama"
                  : `Path halaman: /${page.pathname}`,
              date: "",
              path: `page-${
                page.pathname === ""
                  ? "index"
                  : page.pathname
                      .split("/")
                      .filter((p) => p !== "")
                      .join("-")
              }`,
            };
          }),
        ];

        if (isMainThread) {
          const chunks: (typeof OGs)[] = [];

          for (let i = 0; i < OGs.length; i += chunkSize) {
            chunks.push(OGs.slice(i, i + chunkSize));
          }

          const workerFile = path.join(
            fileURLToPath(import.meta.url),
            "../worker.mjs",
          );

          await Promise.all(
            chunks.map(
              (chunk, idx) =>
                new Promise((resolve, reject) => {
                  const worker = new Worker(workerFile);

                  worker.postMessage(
                    JSON.stringify({ chunk, dir: fileURLToPath(dir) }),
                  );

                  logger.info(
                    `${chalk.blue("worker")} - started worker ${idx}`,
                  );

                  worker.on("message", (message) => {
                    if (message.success) {
                      for (const fileName of message.fileNames) {
                        logger.info(`${chalk.yellow("done")} - ${fileName}`);
                      }

                      logger.info(
                        `${chalk.blue("worker")} - ${chalk.yellow(
                          "done",
                        )} worker ${idx}`,
                      );

                      resolve("done");
                    } else {
                      logger.error(
                        `${chalk.blue(
                          "worker",
                        )} ${idx} - error creating images: ${message.error}`,
                      );

                      reject(message.error);
                    }
                  });

                  worker.on("error", (error) => {
                    logger.error(
                      `${chalk.blue("worker")} - error: ${error.message}`,
                    );
                  });
                }),
            ),
          );
        }
      },
    },
  };
};

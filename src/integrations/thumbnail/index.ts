import { Worker, isMainThread } from "worker_threads";
import { fileURLToPath } from "url";
import chalk from "chalk";
import path from "path";
import fs from "fs";

import type { AstroIntegration } from "astro";

type integrationOptions = {
  chunks?: number;
};

export const thumbnailIntegration = (
  options?: integrationOptions | undefined,
): AstroIntegration => {
  const chunkSize = options?.chunks ?? 10;

  return {
    name: "hinode-thumbnail-integration",

    hooks: {
      "astro:build:done": async ({ pages }) => {
        if (isMainThread) {
          //   const chunks: (typeof participants)[] = [];
          //   for (let i = 0; i < participants.length; i += chunkSize) {
          //     chunks.push(participants.slice(i, i + chunkSize));
          //   }
          //   const workerFile = path.join(
          //     fileURLToPath(import.meta.url),
          //     "../worker.mjs",
          //   );
          //   await Promise.all(
          //     chunks.map(
          //       (chunk, idx) =>
          //         new Promise((resolve, reject) => {
          //           const worker = new Worker(workerFile);
          //           worker.postMessage(
          //             JSON.stringify({ chunk, dir: fileURLToPath(dir) }),
          //           );
          //           logger.info(
          //             `${chalk.blue("worker")} - started worker ${idx}`,
          //           );
          //           worker.on("message", (message) => {
          //             if (message.success) {
          //               for (const fileName of message.fileNames) {
          //                 logger.info(`${chalk.yellow("done")} - ${fileName}`);
          //               }
          //               logger.info(
          //                 `${chalk.blue("worker")} - ${chalk.yellow(
          //                   "done",
          //                 )} worker ${idx}`,
          //               );
          //               resolve("done");
          //             } else {
          //               logger.error(
          //                 `${chalk.blue(
          //                   "worker",
          //                 )} ${idx} - error creating images: ${message.error}`,
          //               );
          //               reject(message.error);
          //             }
          //           });
          //           worker.on("error", (error) => {
          //             logger.error(
          //               `${chalk.blue("worker")} - error: ${error.message}`,
          //             );
          //           });
          //         }),
          //     ),
          //   );
        }
      },
    },
  };
};

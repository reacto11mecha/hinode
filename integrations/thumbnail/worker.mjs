import fs from "fs";
import path from "path";
import satori from "satori";
import fsp from "fs/promises";
import { html } from "satori-html";
import { parentPort } from "worker_threads";

import { Resvg } from "@resvg/resvg-js";

const fontsourceRoot = path.resolve("node_modules/@fontsource/");

const PoppinsNormal = fs.readFileSync(
  path.join(fontsourceRoot, "poppins/files/poppins-latin-400-normal.woff"),
);
const DmDisplayNormal = fs.readFileSync(
  path.join(
    fontsourceRoot,
    "dm-serif-display/files/dm-serif-display-latin-400-normal.woff",
  ),
);
const ZenkaMedium = fs.readFileSync(
  path.join(
    fontsourceRoot,
    "zen-kaku-gothic-new/files/zen-kaku-gothic-new-japanese-700-normal.woff",
  ),
);
const NotoSansJP = fs.readFileSync(
  path.join(
    fontsourceRoot,
    "noto-sans-jp/files/noto-sans-jp-0-700-normal.woff",
  ),
);

const hinodImage = fs.readFileSync(
  path.resolve("src/assets/hinode-ramah-satori.png"),
  "base64",
);
const bgImage = fs.readFileSync(
  path.resolve("src/assets/bg-hinode.png"),
  "base64",
);

const templateMaker = ({ title, description, date }) =>
  html(`
    <div style="display: flex; width: 100%; background-image: url('data:image/png;base64,${bgImage}'); height: 100%; alignItems: center; justifyContent: center;">
      <div style="width: 90%; height: 85%; display: flex; flexDirection: column; justifyContent: space-between;">
        <div style="display: flex; width: 100%; height: 50%; alignItems: center; flexDirection: column; color: #F8FAFC;">
          <h1 style="fontSize: 3.6em; fontFamily: 'Dm Serif Display';">${title}</h1>
          
          <p style="fontSize: 1.6em; letterSpacing: 1.4;">${description}</p>
        </div>

        <div style="display: flex; width: 100%; height: 50%; alignItems: flex-end; justifyContent: space-between;">
          <div style="display: flex; borderRadius: 8px; width: 18em; height: 8em; gap: 2em; justifyContent: center; alignItems: center; backgroundColor: #ECECEC;">
            <img src="data:image/png;base64,${hinodImage}" width="75" height="75" />
            <h1 style="fontFamily: 'Zenka'; fontSize: 2.6em; marginBottom: 0.9em;"><span style="color: #FFB001;">日</span> <span style="color: #F19C35">の</span> <span style="color: #F19C35;">出</span></h1>
          </div>

          <div style="display: flex; alignItems: center; justifyContent: center; height: 8em;">
            <h1 style="marginBottom: 1.9em; letterSpacing: 1.4; color: #F8FAFC; fontFamily: 'Noto Sans JP';">${date}</h1>
          </div>
        </div>
      </div>
    </div>
`);

const createImage = async ({ filePath, title, description, date }) => {
  const content = templateMaker({ title, description, date });

  const svg = await satori(content, {
    width: 1280,
    height: 640,
    fonts: [
      {
        name: "Poppins",
        data: PoppinsNormal,
        weight: 400,
        style: "normal",
      },
      {
        name: "Dm Serif Display",
        data: DmDisplayNormal,
        weight: 400,
        style: "normal",
      },
      {
        name: "Zenka",
        data: ZenkaMedium,
        weight: 700,
        style: "normal",
      },
      {
        name: "Noto Sans JP",
        data: NotoSansJP,
        weight: 700,
        style: "normal",
      },
    ],
  });

  const resvg = new Resvg(svg, {
    background: "white",
    font: {
      fontFiles: [PoppinsNormal, DmDisplayNormal, ZenkaMedium, NotoSansJP],
    },
  });

  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  await fsp.writeFile(filePath, pngBuffer);
};

parentPort.on("message", async (data) => {
  const { dir, chunk: pages } = JSON.parse(data);

  const fileNames = [];

  for (const page of pages) {
    const fileName = `og-${page.path}.png`;
    const fullPathToFile = path.join(dir, "ogs", fileName);

    if (!fs.existsSync(fullPathToFile)) {
      await createImage({
        filePath: fullPathToFile,
        ...page,
      });

      fileNames.push(fileName);
    }
  }

  parentPort.postMessage({ success: true, fileNames });
});

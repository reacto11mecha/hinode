import fs from "fs";
import path from "path";
import satori from "satori";
import { html } from "satori-html";

import { Resvg } from "@resvg/resvg-js";

const fontsourceRoot = path.resolve("../node_modules/@fontsource/");

const PoppinsNormal = fs.readFileSync(
  path.join(fontsourceRoot, "poppins/files/poppins-latin-400-normal.woff"),
);
const RosarioMedium = fs.readFileSync(
  path.join(fontsourceRoot, "rosario/files/rosario-latin-700-normal.woff"),
);
const ZenkaMedium = fs.readFileSync(
  path.join(
    fontsourceRoot,
    "zen-kaku-gothic-new/files/zen-kaku-gothic-new-japanese-700-normal.woff",
  ),
);

const hinodImage = fs.readFileSync(
  path.join(path.resolve(".."), "src/assets/hinode-ramah-satori.png"),
  "base64",
);
const bgImage = fs.readFileSync(
  path.join(path.resolve(".."), "src/assets/bg-hinode.png"),
  "base64",
);

(async () => {
  console.log("STARTING CREATE TEMPLATE");

  const template = html(`
  <div style="display: flex; width: 100%; background-image: url('data:image/png;base64,${bgImage}'); height: 100%; alignItems: center; justifyContent: center;">
    <div style="width: 90%; height: 85%; display: flex; flexDirection: column; justifyContent: space-between;">
      <div style="display: flex; width: 100%; height: 50%; alignItems: center; flexDirection: column; color: #F8FAFC;">
        <h1 style="fontSize: 3.5em; fontFamily: 'Rosario';">Aisatsu dan Hiragana Dasar</h1>
        
        <p style="fontSize: 1.5em; letterSpacing: 1.4;">Penjelasan mengenai Aisatsu dan sistem penulisan dalam bahasa jepang.</p>
      </div>

      <div style="display: flex; width: 100%; height: 50%; alignItems: flex-end; justifyContent: space-between;">
        <div style="display: flex; borderRadius: 8px; width: 18em; height: 8em; gap: 2em; justifyContent: center; alignItems: center; backgroundColor: #ECECEC;">
          <img src="data:image/png;base64,${hinodImage}" width="75" height="75" />
          <h1 style="fontFamily: 'Zenka'; fontSize: 2.5em; marginBottom: 0.9em;"><span style="color: #FFB001;">日</span> <span style="color: #F19C35">の</span> <span style="color: #F19C35;">出</span></h1>
        </div>

        <div style="display: flex; alignItems: center; justifyContent: center; height: 8em;">
          <h1 style="marginBottom: 1.9em; letterSpacing: 1.4; color: #F8FAFC;">2023年 08月 03日</h1>
        </div>
      </div>
    </div>
  </div>
`);

  console.log("STARTING SATORI");

  const svg = await satori(template, {
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
        name: "Rosario",
        data: RosarioMedium,
        weight: 700,
        style: "normal",
      },
      {
        name: "Zenka",
        data: ZenkaMedium,
        weight: 700,
        style: "normal",
      },
    ],
  });

  console.log("DONE SATORI, START RESVG INSTANCE");

  const resvg = new Resvg(svg, {
    background: "white",
    font: {
      fontFiles: [PoppinsNormal, RosarioMedium, ZenkaMedium],
    },
  });

  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  fs.writeFileSync("./test.png", pngBuffer);
})();

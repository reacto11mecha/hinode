// Angkatan 9-10
const modalCeya = "/angkatan/9-10/ceya.png";
const modalCeyaMuflih = "/angkatan/9-10/muflih.png";
const modalCeyaRajendra = "/angkatan/9-10/rajendra.png";
const modalCeyaAlfy = "/angkatan/9-10/alfy.png";
const modalCeyaAzzam = "/angkatan/9-10/azzam.png";
const modalCeyaEzra = "/angkatan/9-10/ezra.png";
const modalCeyaFiqri = "/angkatan/9-10/fiqri.png";
const modalCeyaRasya = "/angkatan/9-10/rasya.png";
const modalCeyaJose = "/angkatan/9-10/jose.png";
// const modalCeyaReivan = "/angkatan/9-10/reivan.png";
const modalCeyaRhannia = "/angkatan/9-10/rhannia.png";
const modalCeyaRihana = "/angkatan/9-10/rihana.png";
const modalCeyaSiti = "/angkatan/9-10/siti.png";

import imageCeya from "./angkatan/9-10/ceya.png";
import imageCeyaAlfy from "./angkatan/9-10/alfy.png";
import imageCeyaAzzam from "./angkatan/9-10/azzam.png";
import imageCeyaEzra from "./angkatan/9-10/ezra.png";
import imageCeyaFiqri from "./angkatan/9-10/fiqri.png";
import imageCeyaJose from "./angkatan/9-10/jose.png";
import imageCeyaMuflih from "./angkatan/9-10/muflih.png";
import imageCeyaRajendra from "./angkatan/9-10/rajendra.png";
import imageCeyaRasya from "./angkatan/9-10/rasya.png";
// import imageCeyareivan from "./angkatan/9-10/reivan.png";
import imageCeyaRhannia from "./angkatan/9-10/rhannia.png";
import imageCeyaRihana from "./angkatan/9-10/rihana.png";
import imageCeyaSiti from "./angkatan/9-10/siti.png";

export interface IMember {
  name: string;
  katakana: string;
  position: string;
  message: string;
  imagePost: ImageMetadata;
  imageModal: string;
}

type TGen = {
  title: string;
  members: IMember[];
  katakanaMax: number;
};

export const generations: TGen[] = [
  {
    title: "Angkatan 9-10",
    members: [
      {
        name: "Serafim",
        katakana: "セラフィム",
        position: "Ketua Umum",
        message: "",
        imagePost: imageCeya,
        imageModal: modalCeya,
      },
      {
        name: "Muflih",
        katakana: "ムフリー",
        position: "Wakil Ketua Umum",
        message: "",
        imagePost: imageCeyaMuflih,
        imageModal: modalCeyaMuflih,
      },
      {
        name: "Rajendra",
        katakana: "ラジェンヅラ",
        position: "Sekretaris 1",
        message: "",
        imagePost: imageCeyaRajendra,
        imageModal: modalCeyaRajendra,
      },
      // {
      //   name: "Rifqi",
      //   katakana: "リフキ",
      //   position: "Sekretaris 2",
      //   message: "",
      //   // image: modalRifqi,
      // },
      {
        name: "Siti",
        katakana: "シチ",
        position: "Bendahara 1",
        message: "",
        imagePost: imageCeyaSiti,
        imageModal: modalCeyaSiti,
      },
      // {
      //   name: "Naufal",
      //   katakana: "ナウファル",
      //   position: "Bendahara 2",
      //   message: "",
      //   // image: modalCeyaNopal,
      // },
      {
        name: "Fiqri",
        katakana: "フィクリ",
        position: "Ketua Divisi Sejarah",
        message: "",
        imagePost: imageCeyaFiqri,
        imageModal: modalCeyaFiqri,
      },
      {
        name: "Alfy",
        katakana: "アルフィー",
        position: "Ketua Divisi Budaya",
        message: "",
        imagePost: imageCeyaAlfy,
        imageModal: modalCeyaAlfy,
      },
      {
        name: "Ezra",
        katakana: "エズラ",
        position: "Ketua Divisi Bahasa",
        message: "Mantap!",
        imagePost: imageCeyaEzra,
        imageModal: modalCeyaEzra,
      },
      {
        name: "Azzam",
        katakana: "アッザッム",
        position: "Anggota Divisi Bahasa",
        message: "",
        imagePost: imageCeyaAzzam,
        imageModal: modalCeyaAzzam,
      },
      {
        name: "Rasya",
        katakana: "ラシャ",
        position: "Anggota Divisi Bahasa",
        message: "",
        imagePost: imageCeyaRasya,
        imageModal: modalCeyaRasya,
      },
      {
        name: "Jose",
        katakana: "ジョーセ",
        position: "Anggota Divisi Sejarah",
        message: "",
        imagePost: imageCeyaJose,
        imageModal: modalCeyaJose,
      },
      {
        name: "Rihana",
        katakana: "リハナ",
        position: "Anggota Divisi Budaya",
        message: "",
        imagePost: imageCeyaRihana,
        imageModal: modalCeyaRihana,
      },
      {
        name: "Rhannia",
        katakana: "ランニア",
        position: "Anggota Divisi Budaya",
        message: "",
        imagePost: imageCeyaRhannia,
        imageModal: modalCeyaRhannia,
      },
    ],
    katakanaMax: 6,
  },
];

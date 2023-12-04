// Angkatan 9-10
import imageCeya from "./angkatan/9-10/ceya.png";
import imageCeyaAlfy from "./angkatan/9-10/alfy.png";
import imageCeyaAzzam from "./angkatan/9-10/azzam.png";
import imageCeyaNopal from "./angkatan/9-10/naufal.png";
import imageCeyaRifqi from "./angkatan/9-10/rifqi.png";
import imageCeyaEzra from "./angkatan/9-10/ezra.png";
import imageCeyaFiqri from "./angkatan/9-10/fiqri.png";
import imageCeyaJose from "./angkatan/9-10/jose.png";
import imageCeyaMuflih from "./angkatan/9-10/muflih.png";
import imageCeyaRajendra from "./angkatan/9-10/rajendra.png";
import imageCeyaRasya from "./angkatan/9-10/rasya.png";
import imageCeyaReivan from "./angkatan/9-10/reivan.png";
import imageCeyaKenzi from "./angkatan/9-10/kenzi.png";
import imageCeyaRhannia from "./angkatan/9-10/rhannia.png";
import imageCeyaRihana from "./angkatan/9-10/rihana.png";
import imageCeyaSiti from "./angkatan/9-10/siti.png";
import imageCeyaPasya from "./angkatan/9-10/pasya.png";

export interface IMember {
  name: string;
  katakana: string;
  position: string;
  message: string;
  imagePost: ImageMetadata;
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
      },
      {
        name: "Muflih",
        katakana: "ムフリー",
        position: "Wakil Ketua Umum",
        message: "",
        imagePost: imageCeyaMuflih,
      },
      {
        name: "Rajendra",
        katakana: "ラジェンヅラ",
        position: "Sekretaris 1",
        message: "",
        imagePost: imageCeyaRajendra,
      },
      {
        name: "Rifqi",
        katakana: "リフキ",
        position: "Sekretaris 2",
        message: "",
        imagePost: imageCeyaRifqi,
      },
      {
        name: "Siti",
        katakana: "シチ",
        position: "Bendahara 1",
        message: "",
        imagePost: imageCeyaSiti,
      },
      {
        name: "Naufal",
        katakana: "ナウファル",
        position: "Bendahara 2",
        message: "",
        imagePost: imageCeyaNopal,
      },
      {
        name: "Fiqri",
        katakana: "フィクリ",
        position: "Ketua Divisi Sejarah",
        message: "",
        imagePost: imageCeyaFiqri,
      },
      {
        name: "Alfy",
        katakana: "アルフィー",
        position: "Ketua Divisi Budaya",
        message: "",
        imagePost: imageCeyaAlfy,
      },
      {
        name: "Ezra",
        katakana: "エズラ",
        position: "Ketua Divisi Bahasa",
        message: "Mantap!",
        imagePost: imageCeyaEzra,
      },
      {
        name: "Azzam",
        katakana: "アッザッム",
        position: "Anggota Divisi Bahasa",
        message: "",
        imagePost: imageCeyaAzzam,
      },
      {
        name: "Rasya",
        katakana: "ラシャ",
        position: "Anggota Divisi Bahasa",
        message: "",
        imagePost: imageCeyaRasya,
      },
      {
        name: "Jose",
        katakana: "ジョーセ",
        position: "Anggota Divisi Sejarah",
        message: "",
        imagePost: imageCeyaJose,
      },
      {
        name: "Rihana",
        katakana: "リハナ",
        position: "Anggota Divisi Budaya",
        message: "",
        imagePost: imageCeyaRihana,
      },
      {
        name: "Rhannia",
        katakana: "ランニア",
        position: "Anggota Divisi Budaya",
        message: "",
        imagePost: imageCeyaRhannia,
      },
      {
        name: "Reivan",
        katakana: "レイヴァン",
        position: "Anggota Divisi Budaya",
        message: "",
        imagePost: imageCeyaReivan,
      },
      {
        name: "Kenzi",
        katakana: "ケンジ",
        position: "Anggota Divisi Budaya",
        message: "",
        imagePost: imageCeyaKenzi,
      },
      {
        name: "Pasya",
        katakana: "パシア",
        position: "Anggota Divisi Bahasa",
        message: "",
        imagePost: imageCeyaPasya,
      },
    ],
    katakanaMax: 6,
  },
];

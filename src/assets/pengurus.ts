// Angkatan 9-10
const zamanCeya = "/angkatan/9-10/ceya.png";
const zamanCeyaMuflih = "/angkatan/9-10/muflih.png";
const zamanCeyaRajendra = "/angkatan/9-10/rajendra.png";
const zamanCeyaAlfy = "/angkatan/9-10/alfy.png";
const zamanCeyaAzzam = "/angkatan/9-10/azzam.png";
const zamanCeyaEzra = "/angkatan/9-10/ezra.png";
const zamanCeyaFiqri = "/angkatan/9-10/fiqri.png";
const zamanCeyaRasya = "/angkatan/9-10/rasya.png";
const zamanCeyaJose = "/angkatan/9-10/jose.png";
const zamanCeyaReivan = "/angkatan/9-10/reivan.png";
const zamanCeyaRhannia = "/angkatan/9-10/rhannia.png";
const zamanCeyaRihana = "/angkatan/9-10/rihana.png";
const zamanCeyaSiti = "/angkatan/9-10/siti.png";

export interface IMember {
  name: string;
  katakana: string;
  position: string;
  message: string;
  image: string;
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
        image: zamanCeya,
      },
      {
        name: "Muflih",
        katakana: "ムフリー",
        position: "Wakil Ketua Umum",
        message: "",
        image: zamanCeyaMuflih,
      },
      {
        name: "Rajendra",
        katakana: "ラジェンヅラ",
        position: "Sekretaris 1",
        message: "",
        image: zamanCeyaRajendra,
      },
      // {
      //   name: "Rifqi",
      //   katakana: "リフキ",
      //   position: "Sekretaris 2",
      //   message: "",
      //   // image: zamanRifqi,
      // },
      {
        name: "Siti",
        katakana: "シチ",
        position: "Bendahara 1",
        message: "",
        image: zamanCeyaSiti,
      },
      // {
      //   name: "Naufal",
      //   katakana: "ナウファル",
      //   position: "Bendahara 2",
      //   message: "",
      //   // image: zamanCeyaNopal,
      // },
      {
        name: "Fiqri",
        katakana: "フィクリ",
        position: "Ketua Divisi Sejarah",
        message: "",
        image: zamanCeyaFiqri,
      },
      {
        name: "Alfy",
        katakana: "アルフィー",
        position: "Ketua Divisi Budaya",
        message: "",
        image: zamanCeyaAlfy,
      },
      {
        name: "Ezra",
        katakana: "エズラ",
        position: "Ketua Divisi Bahasa",
        message: "Mantap!",
        image: zamanCeyaEzra,
      },
      {
        name: "Azzam",
        katakana: "アッザッム",
        position: "Anggota Divisi Bahasa",
        message: "",
        image: zamanCeyaAzzam,
      },
      {
        name: "Rasya",
        katakana: "ラシャ",
        position: "Anggota Divisi Bahasa",
        message: "",
        image: zamanCeyaRasya,
      },
      {
        name: "Jose",
        katakana: "ジョーセ",
        position: "Anggota Divisi Sejarah",
        message: "",
        image: zamanCeyaJose,
      },
      {
        name: "Rihana",
        katakana: "リハナ",
        position: "Anggota Divisi Budaya",
        message: "",
        image: zamanCeyaRihana,
      },
      {
        name: "Rhannia",
        katakana: "ランニア",
        position: "Anggota Divisi Budaya",
        message: "",
        image: zamanCeyaRhannia,
      },
    ],
    katakanaMax: 6,
  },
];

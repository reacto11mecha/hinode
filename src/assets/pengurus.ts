export interface IMember {
  name: string;
  katakana: string;
  position: string;
  message: string;
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
      },
      {
        name: "Muflih",
        katakana: "ムフリー",
        position: "Wakil Ketua Umum",
        message: "",
      },
      {
        name: "Rajendra",
        katakana: "ラジェンヅラ",
        position: "Sekretaris 1",
        message: "",
      },
      {
        name: "Rifqi",
        katakana: "リフキ",
        position: "Sekretaris 2",
        message: "",
      },
      {
        name: "Siti",
        katakana: "シチ",
        position: "Bendahara 1",
        message: "",
      },
      {
        name: "Naufal",
        katakana: "ナウファル",
        position: "Bendahara 2",
        message: "",
      },
      {
        name: "Fiqri",
        katakana: "フィクリ",
        position: "Ketua Divisi Sejarah",
        message: "",
      },
      {
        name: "Alfy",
        katakana: "アルフィー",
        position: "Ketua Divisi Budaya",
        message: "",
      },
      {
        name: "Ezra",
        katakana: "エズラ",
        position: "Ketua Divisi Bahasa",
        message: "Mantap!",
      },
    ],
    katakanaMax: 6,
  },
];

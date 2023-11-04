export interface IMember {
  name: string;
  katakana: string;
  position: string;
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
      },
      {
        name: "Muflih",
        katakana: "ムフリー",
        position: "Wakil Ketua Umum",
      },
      {
        name: "Rajendra",
        katakana: "ラジェンヅラ",
        position: "Sekretaris 1",
      },
      {
        name: "Rifqi",
        katakana: "リフキ",
        position: "Sekretaris 2",
      },
      {
        name: "Siti",
        katakana: "シチ",
        position: "Bendahara 1",
      },
      {
        name: "Naufal",
        katakana: "ナウファル",
        position: "Bendahara 2",
      },
      {
        name: "Fiqri",
        katakana: "フィクリ",
        position: "Ketua Divisi Sejarah",
      },
      {
        name: "Alfy",
        katakana: "アルフィー",
        position: "Ketua Divisi Budaya",
      },
      {
        name: "Ezra",
        katakana: "エズラ",
        position: "Ketua Divisi Bahasa",
      },
    ],
    katakanaMax: 6,
  },
];

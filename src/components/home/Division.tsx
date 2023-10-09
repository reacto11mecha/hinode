const divisions = [
  {
    name: "BAHASA (語/ご)",
  },
  {
    name: "BUDAYA  (文化 / ぶんか)",
  },
  {
    name: "SEJARAH (歴史 / れきし)",
  },
];

export const Division = () => {
  return (
    <section className="m-auto px-6 pb-10 sm:px-14 md:px-16">
      <div className="flex flex-col items-center gap-8">
        <h1 className="font-bold text-center text-4xl">DIVISI</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {divisions.map((division) => (
            <div
              className="p-5 border rounded dark:bg-neutral-800 dark:border-neutral-700"
              key={division.name}
            >
              <h2 className="text-center text-xl font-bold font-zenka">
                {division.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

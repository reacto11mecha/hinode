export const Chooser = ({ currentValue }: { currentValue: string }) => (
  <select
    className="border rounded p-2 dark:bg-neutral-800 dark:border-neutral-800"
    onChange={(e) => {
      location.href = `/materi${e.target.value}`;
    }}
    value={currentValue}
  >
    <option value="/">Semua</option>
    <option value="/bahasa">Bahasa</option>
    <option value="/budaya">Budaya</option>
    <option value="/sejarah">Sejarah</option>
  </select>
);

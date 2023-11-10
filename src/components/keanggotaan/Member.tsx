import type { IMember } from "@/assets/pengurus";

export const Member = ({ katakanaMax, memberData, children }: {
  katakanaMax: number; memberData: IMember; children: React.ReactNode
}) => (
  <button
    className="bg-slate-100 dark:bg-stone-800 text-black w-[18em] h-[23em] flex flex-col items-center justify-end"
    onClick={() => {
      const toggle = (window as unknown as { toggleModal: () => void }).toggleModal;

      const imageEl = document.querySelector(".modal img")! as HTMLImageElement;
      imageEl.src = memberData.image;

      const normalName = document.querySelector(".modal #normal-name")!;
      normalName.textContent = memberData.name;

      const nihonName = document.querySelector(".modal #nihon-name")!;
      nihonName.textContent = memberData.katakana;

      const message = document.querySelector(".modal #message")!;
      message.textContent = memberData.message;

      const position = document.querySelector(".modal #position")!;
      position.textContent = memberData.position;

      toggle();
    }}
  >
    {children}
    <div className="flex flex-row w-full">
      {Array.from({ length: katakanaMax }).map((_, idx) => (
        <div key={idx} className="h-10 border-[0.1px] w-full flex dark:text-white items-center justify-center font-zenka font-semibold text-xl">
          {memberData.katakana.split("")[idx] ?? ""}
        </div>
      ))}
    </div>
  </button>
);

type Toggle = () => void;

export const FireModalButton = () => (
  <button
    className="w-full h-full"
    onClick={() => {
      const toggle = window.toggleModal as Toggle;

      toggle();
    }}
  />
);

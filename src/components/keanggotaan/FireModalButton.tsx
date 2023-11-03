export const FireModalButton = () => (
  <button
    className="w-full h-full"
    onClick={() => {
      const toggle = (window as unknown as { toggleModal: () => void }).toggleModal;

      toggle();
    }}
  />
);

import ModalBackdrop from "./Modal_Backdrop";

export default function CenterModal({ children }) {
  return (
    <>
      <ModalBackdrop>
        <div
          onClick={(e) => e.stopPropagation()}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg max-h-[80vh] min-h-max w-3/6 z-50 rounded-md overflow-hidden">
          {children}
        </div>
      </ModalBackdrop>
    </>
  );
}

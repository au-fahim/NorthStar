import ModalBackdrop from "./Modal_Backdrop";

export default function CenterModal({ children }) {
  return (
    <>
      <ModalBackdrop>
        <div
          onClick={(e) => e.stopPropagation()}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg max-h-[80vh] min-h-max w-11/12 md:max-w-2xl lg:max-w-3xl z-50 rounded-md overflow-y-scroll sm:overflow-hidden">
          {children}
        </div>
      </ModalBackdrop>
    </>
  );
}

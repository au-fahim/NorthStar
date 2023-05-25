import ModalBackdrop from "./Modal_Backdrop";

export default function CenterModal({ onHideModal, children }) {
  return (
    <>
      <ModalBackdrop onHideModal={onHideModal}></ModalBackdrop>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg max-h-[80vh] min-h-max w-3/6 z-50 rounded-md overflow-hidden">
        <div>{children}</div>
      </div>
    </>
  );
}

import ModalBackdrop from "./Modal_Backdrop";

export default function RightModal({ onHideModal, children }) {
  return (
    <>
      <ModalBackdrop onHideModal={onHideModal}></ModalBackdrop>
      <div className="fixed right-0 bg-white shadow-lg h-screen w-80 z-50">
        <div>{children}</div>
      </div>
    </>
  );
}

import ModalBackdrop from "./Modal_Backdrop";

export default function RightModal(props) {
  const { onHideModal } = props;
  return (
    <>
      <ModalBackdrop onHideModal={onHideModal}></ModalBackdrop>
      <div className="fixed right-0 bg-white shadow-lg h-screen w-80 z-50">
        <div className="modal-wrapper">
          {/* Modal Header */}
          <header>Cart</header>
          <h1>This a modal</h1>
          {/* Modal Content */}
          <div>{props.children}</div>
        </div>
      </div>
    </>
  );
}

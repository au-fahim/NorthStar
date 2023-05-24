import ReactDOM from "react-dom";

export default function ModalBackdrop(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <section
          onClick={props.onHideModal}
          className="fixed w-screen h-screen bg-[#000000cc] z-40">
          {props.children}
        </section>,
        document.getElementById("modal")
      )}
    </>
  );
}

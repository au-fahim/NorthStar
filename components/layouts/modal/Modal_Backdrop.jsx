import ReactDOM from "react-dom";

export default function ModalBackdrop(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <section
          onClick={props.onHideModal}
          className="absolute w-screen h-screen bg-[rgba(0,0,0,0.5)] z-40">
          {props.children}
        </section>,
        document.getElementById("modal")
      )}
    </>
  );
}

import Nav from "../nav/Nav";
import ModalBackdrop from "./Modal_Backdrop";
import { IoCloseOutline } from "react-icons/io5";

export default function LeftNavModal({ hideLeftMenuFunc }) {
  return (
    <>
      <ModalBackdrop hideLeftMenuFunc={hideLeftMenuFunc}>
        <div
          onClick={(e) => e.stopPropagation()}
          className="fixed top-0 left-0 bg-white shadow-lg min-h-max w-60 max-w-full md:max-w-full z-50 overflow-y-auto animate-left-menu-show">
          {/* NAVIGATION MENU HEADER */}
          <header className="flex flex-row gap-2 justify-between items-center uppercase py-2 pl-4 pr-2 cursor-pointer border-b">
            <img src="/North_Star.png" alt="North Star" className="h-6" />

            <button
              className="btn-icon border border-slate-100"
              onClick={hideLeftMenuFunc}>
              <IoCloseOutline className="icon" />
            </button>
          </header>

          {/* NAVIGATION LINK */}
          <Nav
            hideLeftMenuFunc={hideLeftMenuFunc}
            styleType={"leftMenuNav"}
            subMenuStyle={"nestedLeftMenu"}
          />
        </div>
      </ModalBackdrop>
    </>
  );
}

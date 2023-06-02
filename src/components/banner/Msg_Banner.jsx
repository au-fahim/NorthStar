import { useState } from "react";

import { IoCloseOutline } from "react-icons/io5";

export default function MsgBanner() {
  const [showBannerMsg, setShowBannerMsg] = useState(true);

  return (
    <>
      {showBannerMsg && (
        <div className="text-xs sm:text-base bg-slate-900 text-white">
          <div className="main-wrapper">
            <div className="flex flex-row items-center justify-between py-2">
              <div></div>
              <article className="break-words">
                <strong className="uppercase">get 20% off</strong> on your first
                order.{" "}
                <a href="#" className="text-orange-500 underline">
                  Sign up now
                </a>
              </article>
              <button onClick={() => setShowBannerMsg((prev) => !prev)}>
                <IoCloseOutline className="float-right text-xl sm:text-2xl sm:mr-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

export default function DetailsItem({ displayName, mainContent }) {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <div className="border-t">
        {/* DISPLAY TEXT BUTTON */}
        <div
          onClick={() => setShowContent(!showContent)}
          className="flex flex-row items-center justify-between py-2 md:py-4 px-2 md:px-4 cursor-pointer select-none">
          <h1 className="text-lg md:text-xl font-medium">{displayName}</h1>
          <button className="btn-icon">
            <HiChevronDown
              className={`icon ${
                !showContent ? "rotate-0" : "rotate-180"
              } transition`}
            />
          </button>
        </div>

        {/* HIDDEN CONTENT */}
        {!!showContent && (
          <div className="px-2 md:px-4 pb-6">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              voluptatem tenetur enim delectus dolor perferendis, repudiandae
              esse unde harum quo at velit, commodi asperiores labore laborum
              vero ad quisquam provident.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              ad quas deserunt illo, odio amet beatae sequi eius laboriosam
              quam, dignissimos, minus molestiae hic voluptatem facere laborum
              iste totam possimus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              veritatis soluta voluptate at officiis et fugiat iusto excepturi,
              sit id, reiciendis adipisci qui est corrupti dicta! Earum delectus
              corporis dolorem.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

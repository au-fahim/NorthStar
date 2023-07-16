import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { HiArrowRight, HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function HeroBanner() {
  return (
    <div className="main-wrapper ">
      <div className="relative text-white text-xl rounded-md overflow-hidden">
        <Carousel
          autoPlay={true}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          infiniteLoop={true}
          useKeyboardArrows={true}
          renderArrowPrev={(clickHandler, hasPrev) => (
            <button
              onClick={clickHandler}
              className="right-16 lg:right-20 border-r rounded-l-md homeSlider--btn">
              <HiChevronLeft />
            </button>
          )}
          renderArrowNext={(clickHandler, hasNext) => (
            <button
              onClick={clickHandler}
              className="right-6 lg:right-10 rounded-r-md homeSlider--btn">
              <HiChevronRight />
            </button>
          )}>
          <div>
            <img src="/hero_banner/slide-1.png" loading="lazy" />
            <button className="heroBanner--btn">
              <span>shop now</span> <HiArrowRight />
            </button>
          </div>
          <div>
            <img src="/hero_banner/slide-2.png" loading="lazy" />
            <button className="heroBanner--btn">
              <span>shop now</span> <HiArrowRight />
            </button>
          </div>
          <div>
            <img src="/hero_banner/slide-3.png" loading="lazy" />
            <button className="heroBanner--btn">
              <span>shop now</span> <HiArrowRight />
            </button>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

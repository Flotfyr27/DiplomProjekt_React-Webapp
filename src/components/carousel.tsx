import { FC, useState } from "react";
import style from "../styles/components/Carousel.module.scss";
import { Slide } from "../types/SlideType";

export interface CarouselProps {
  slides: Slide[];
}

const Carousel: FC<CarouselProps> = ({ slides }) => {
  const [showSlide, setShowSlide] = useState(0);

  function changeSlide(n: number) {
    // Upper limit
    if (showSlide === slides.length - 1 && n > 0) {
      setShowSlide(0);
    } else if (showSlide == 0 && n < 0) {
      setShowSlide(slides.length - 1);
    } else {
      setShowSlide(showSlide + n);
    }
  }
  let dots: any = [];

  return (
    <>
      <div className={style.carouselContainer}>
        {slides.map((s, idx) => {
          dots.push(
            <span
              key={idx}
              className={`${style.dot} ${
                showSlide === idx ? style.active : ""
              }`}
              onClick={() => setShowSlide(idx)}
            ></span>
          );
          return (
            <div
              className={`${style.slide} ${
                showSlide === idx ? style.slideIn : style.slideOut
              }`}
              key={idx}
            >
              <img src={s.image} className={style.image} alt="" />
              <div className={style.caption}>{s.caption}</div>
            </div>
          );
        })}
        <a className={style.prev} onClick={() => changeSlide(-1)}>
          &#10094;
        </a>
        <a className={style.next} onClick={() => changeSlide(1)}>
          &#10095;
        </a>
      </div>
      <div className={style.endDots}>{dots}</div>
    </>
  );
};
export default Carousel;

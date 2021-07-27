import { useKeenSlider } from "keen-slider/react";
import styles from "./slider.module.css";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
export default function Slider(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slidesPerView: props.slidesPerView ? props.slidesPerView : 1,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
console.log(props.slidesPerView);
  return (
    <>
      <div className={styles.navigationWrapper}>
        <div ref={sliderRef} className={`keen-slider`}>
          {props.slideData.map((data, index) => (
            <div className={"keen-slider__slide" + " number-slide"} key={index}>
              {data}
            </div>
          ))}
        </div>
        {slider && (
          <>
            {/* <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            /> */}
          </>
        )}
      </div>
      {slider && (
        <div className={styles.dots}>
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={
                  `${styles.dot}` +
                  (currentSlide === idx ? ` ${styles.active}` : "")
                }
              />
            );
          })}
        </div>
      )}
    </>
  );
}

function ArrowLeft(props) {
  const disabled = props.disabled ? styles.arrowDisabled : "";
  return (
    <svg
      onClick={props.onClick}
      className={`${styles.arrow} ${styles.arrowLeft}` + disabled}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowRight(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`${styles.arrow} ${styles.arrowRight}` + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}

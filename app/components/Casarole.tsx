"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef, useState } from "react";

export default function Casarole() {

    const [currentSlide, setCurrentSlide] = useState(0);
    

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    slideChanged(s) {
        setCurrentSlide(s.track.details.rel); // update active slide index
      },
  });

  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!slider) return;

    const next = () => {
      if (slider.current) {
        slider.current.next();
      }
    };

    const startAutoplay = () => {
      timeout.current = setInterval(next, 5000); // 30 seconds
    };

    const stopAutoplay = () => {
      if (timeout.current) {
        clearInterval(timeout.current);
      }
    };

    startAutoplay();

    // Clean up on unmount
    return () => {
      stopAutoplay();
    };
  }, [slider]);

  const goNext = () => {
    slider.current?.next();
  };

  const goPrev = () => {
    slider.current?.prev();
  };

  const goToSlide = (idx: number) => {
    slider.current?.moveToIdx(idx);
  };

  return (
    <div className="w-full h-[calc(100dvh-10rem)] bg-amber-700 lg:flex hidden relative">
      <div ref={sliderRef} className="keen-slider w-full h-full">
        <div className="keen-slider__slide">
          <img
            src="/images/img1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="keen-slider__slide">
          <img
            src="/images/img2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        
      </div>

      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 
      bg-black bg-opacity-50 text-white text-4xl w-16 h-16 rounded-full 
      flex items-center justify-center font-bold cursor-pointer" onClick={goPrev}>
        <i className="ri-arrow-left-wide-line" ></i>
        </button>

        <button className="absolute top-1/2 right-4 transform -translate-y-1/2 
      bg-black bg-opacity-50 text-white text-4xl w-16 h-16 rounded-full 
      flex items-center justify-center font-bold cursor-pointer" onClick={goNext}>
        <i className="ri-arrow-right-wide-line"></i>
        </button>

        <div className="absolute bottom-4 right-4 flex gap-2">
        {[0, 1].map((idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? 'bg-white' : 'bg-gray-400'
            } border border-black`}
          ></button>
        ))}
      </div>
    </div>
  );
}

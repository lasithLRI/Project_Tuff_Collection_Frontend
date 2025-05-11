"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef, useState } from "react";

const images = [
  "/images/products/01.JPG",
  "/images/products/02.JPG",
  "/images/products/03.JPG",
  "/images/products/04.JPG",
  "/images/products/05.JPG",
];

export default function ImagesContainer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
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
      timeout.current = setInterval(next, 5000);
    };

    const stopAutoplay = () => {
      if (timeout.current) {
        clearInterval(timeout.current);
      }
    };

    startAutoplay();
    return () => stopAutoplay();
  }, [slider]);

  const goToSlide = (idx: number) => {
    slider.current?.moveToIdx(idx);
  };

  return (
    <div className="w-full h-[42rem]  flex">
      {/* Main Slider */}
      <div className="h-full w-[30rem] border border-black">
        <div ref={sliderRef} className="keen-slider w-full h-full">
          {images.map((src, index) => (
            <div key={index} className="keen-slider__slide">
              <img
                src={src}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail Sidebar */}
      <div className="h-full w-32 pl-4 flex flex-col justify-between">
        {images.map((src, index) => (
          <div
            key={index}
            className={`w-full h-32  cursor-pointer  border border-black ${
              currentSlide === index ? "ring-2 ring-black opacity-100 ring-offset-2" : "bg-black opacity-50"
            }`}
            onClick={() => goToSlide(index)}
          >
            <div className="w-full h-full bg-blue-900">
              <img src={src} alt={`Thumb ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


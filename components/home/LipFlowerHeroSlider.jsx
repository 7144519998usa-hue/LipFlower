"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/lipflower/slides/lipflower-slide-1.png",
    alt: "LipFlower luxury beauty edit with premium cosmetics and soft rose styling",
  },
  {
    src: "/images/lipflower/slides/lipflower-slide-2.png",
    alt: "LipFlower skin care rituals banner with premium creams and serums",
  },
  {
    src: "/images/lipflower/slides/lipflower-slide-3.png",
    alt: "LipFlower makeup comparison banner with soft feminine color styling",
  },
  {
    src: "/images/lipflower/slides/lipflower-slide-4.png",
    alt: "LipFlower lip care studio banner with premium lip care styling",
  },
  {
    src: "/images/lipflower/slides/lipflower-slide-5.png",
    alt: "LipFlower fragrance and body care banner with warm luxury styling",
  },
  {
    src: "/images/lipflower/slides/lipflower-slide-6.png",
    alt: "LipFlower beauty tools and jewelry banner with polished accessories",
  },
];

export default function LipFlowerHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  function goToPrevious() {
    setActiveIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length);
  }

  function goToNext() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
  }

  return (
    <section
      className="lipflower-slider-shell"
      aria-label="Featured LipFlower beauty banners"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="lipflower-slider-frame">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 768px) calc(100vw - 32px), 1120px"
            className={index === activeIndex ? "slider-image is-active" : "slider-image"}
          />
        ))}
        <button
          type="button"
          className="slider-arrow slider-arrow-prev"
          aria-label="Show previous LipFlower slide"
          onClick={goToPrevious}
        >
          ‹
        </button>
        <button
          type="button"
          className="slider-arrow slider-arrow-next"
          aria-label="Show next LipFlower slide"
          onClick={goToNext}
        >
          ›
        </button>
        <div className="slider-dots" aria-label="LipFlower slide navigation">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              className={index === activeIndex ? "slider-dot is-active" : "slider-dot"}
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

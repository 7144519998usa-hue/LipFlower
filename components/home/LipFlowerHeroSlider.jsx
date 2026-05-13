"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/lipflower/slides/lipflower-slide-1.png",
    alt: "Woman using a luxury serum with premium beauty products styled nearby",
  },
  {
    src: "/images/lipflower/slides/lipflower-slide-2.png",
    alt: "Woman testing moisturizer texture with premium skin care products",
  },
  {
    src: "/images/lipflower/slides/lipflower-slide-3.png",
    alt: "Woman comparing foundation and complexion products in a luxury beauty setting",
  },
  {
    src: "/images/lipflower/slides/lipflower-slide-4.png",
    alt: "Woman applying lip oil with premium lip care products on a vanity",
  },
  {
    src: "/images/lipflower/slides/lipflower-slide-5.png",
    alt: "Woman holding fragrance with luxury body care products nearby",
  },
  {
    src: "/images/lipflower/slides/lipflower-slide-6.png",
    alt: "Woman using beauty tools with jewelry and premium accessories nearby",
  },
];

export default function LipFlowerHeroSlider({
  eyebrow = "The Beauty Edit",
  title = "A softer way to discover luxury beauty",
  description = "LipFlower curates skin care, makeup, fragrance, hair care, lip care, and beauty accessories with an editorial eye for texture, finish, routine fit, and everyday elegance.",
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 5000);

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
        <div className="lipflower-slider-image-stage">
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
            {"<"}
          </button>
          <button
            type="button"
            className="slider-arrow slider-arrow-next"
            aria-label="Show next LipFlower slide"
            onClick={goToNext}
          >
            {">"}
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
        <div className="lipflower-slider-caption">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}

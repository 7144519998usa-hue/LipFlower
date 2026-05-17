"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { homepageSlides } from "../../data/homepageSlides";

function isSvgImage(imageUrl) {
  return imageUrl.endsWith(".svg");
}

function isRemoteImage(imageUrl) {
  return imageUrl.startsWith("https://");
}

export default function HomepageHeroSlider({ slides = homepageSlides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const activeSlide = slides[activeIndex];
  const hasAffiliateSlide = slides.some((slide) => slide.affiliate);

  useEffect(() => {
    if (isPaused || slides.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused, slides.length]);

  function goToPrevious() {
    setActiveIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length);
  }

  function goToNext() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
  }

  function handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNext();
    }
  }

  function handleTouchEnd(event) {
    if (touchStartX === null) {
      return;
    }

    const distance = touchStartX - event.changedTouches[0].clientX;

    if (Math.abs(distance) > 42) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    setTouchStartX(null);
  }

  return (
    <section
      className="lipflower-slider-shell homepage-hero-slider"
      aria-label="Featured LipFlower beauty edits"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
      onTouchEnd={handleTouchEnd}
    >
      <div className="lipflower-slider-frame">
        <div className="lipflower-slider-image-stage">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            const imageClassName = isActive ? "slider-image is-active" : "slider-image";

            return isSvgImage(slide.imageUrl) ? (
              <img
                key={slide.id}
                src={slide.imageUrl}
                alt={slide.alt}
                className={imageClassName}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            ) : (
              <Image
                key={slide.id}
                src={slide.imageUrl}
                alt={slide.alt}
                fill
                priority={index === 0}
                loading={index === 0 ? undefined : "lazy"}
                sizes="(max-width: 768px) 100vw, 1180px"
                className={imageClassName}
                unoptimized={isRemoteImage(slide.imageUrl)}
              />
            );
          })}

          <div className="slider-copy-overlay">
            <span className="eyebrow">The Beauty Edit</span>
            <h1>{activeSlide.title}</h1>
            <p>{activeSlide.subtitle}</p>
            <Link
              href={activeSlide.ctaUrl}
              className="search-button"
              rel={activeSlide.affiliate ? "sponsored" : undefined}
            >
              {activeSlide.ctaText}
            </Link>
          </div>

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
                key={slide.id}
                type="button"
                className={index === activeIndex ? "slider-dot is-active" : "slider-dot"}
                aria-label={`Show ${slide.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        {hasAffiliateSlide ? (
          <p className="slider-affiliate-disclosure">
            As an affiliate, we may earn from qualifying purchases.
          </p>
        ) : null}
      </div>
    </section>
  );
}

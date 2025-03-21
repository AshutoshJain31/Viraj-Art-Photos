"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  slides: {
    title: string;
    author: string;
  }[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-500 transform hover:shadow-2xl">
            <div className="relative h-full">
              <svg
                className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                  fill="currentColor"
                />
              </svg>
              
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-medium text-gray-900 mb-8">
                  {slides[current].title}
                </p>
                <footer className="mt-8">
                  <p className="text-base font-semibold text-gray-900">
                    {slides[current].author}
                  </p>
                </footer>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0">
            <button
              onClick={previousSlide}
              className="absolute left-0 -ml-4 md:-ml-8 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 -mr-4 md:-mr-8 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === current
                    ? "bg-gray-800 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Slider.css";

// Importuj slike
import image1 from "../SliderSlike/slide1.jpg";
import image2 from "../SliderSlike/slide2.jpg";
import image3 from "../SliderSlike/slide3.jpg";

const slides = [image1, image2, image3];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <TransitionGroup>
        <CSSTransition
          key={slides[currentIndex]}
          timeout={600}
          classNames="fade"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={slides[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className="object-cover w-full h-full"
            />
            {/* Veće dugme centrirano u slideru */}
            <a
              href="#"
              className="absolute text-white text-3xl font-bold bg-green-500 bg-opacity-60 py-6 px-10 rounded-lg shadow-lg transform translate-y-[150%] opacity-0 transition-all duration-500 ease-out hover:translate-y-0 hover:opacity-100"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="flex items-center justify-center">
                <span className="mr-2">Poljoprivreda</span>
              </div>
            </a>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
}

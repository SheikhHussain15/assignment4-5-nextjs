'use client'
import React, { useState } from 'react';
import Image from 'next/image'
const ImageSlider = () => {
    const slides = [
        { src: '/image/slider1.jpg', alt: 'Burger' },
        { src: '/image/slider2.jpg', alt: 'Pizza' },
        { src: '/image/slider3.jpg', alt: 'Fries' },
        { src: '/image/slider3.jpg', alt: 'Fries' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        setCurrentIndex(isFirstSlide ? slides.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
    };

    const goToSlide = (index:any) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-[97%] mx-auto mt-10 overflow-hidden rounded-lg shadow-lg">
            {/* Slider */}
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="min-w-full">
                        <Image src={slide.src} alt={slide.alt} width={1000} height={100} className="w-full" />
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-800"
                onClick={prevSlide}
            >
                &#10094;
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-800"
                onClick={nextSlide}
            >
                &#10095;
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-4 mb-5">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 w-3 rounded-full mx-2 ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;

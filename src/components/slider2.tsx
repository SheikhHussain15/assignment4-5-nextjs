'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function SpecialtiesSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const specialties = [
        { id: 1, image: '/spec/spec1.jpg', title: 'Specialty 1' },
        { id: 2, image: '/spec/spec2.jpg', title: 'Specialty 2' },
        { id: 3, image: '/spec/spec4.jpg', title: 'Specialty 3' },
        { id: 3, image: '/spec/spec5.jpg', title: 'Specialty 4' },
        { id: 3, image: '/spec/spec6.jpg', title: 'Specialty 5' },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % specialties.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + specialties.length) % specialties.length);
    };

    return (
        <div className='w-[80%] '>
        <div className="slider-container">
            <div className="slider" style={{ transform: `translateX(-${currentIndex * 320}px)` }}>
                {specialties.map((specialty) => (
                    <div className="card" key={specialty.id}>
                        <Image
                            src={specialty.image}
                            alt={specialty.title}
                            width={300}
                            height={200}
                            layout="responsive"
                        />
                        <h3>{specialty.title}</h3>
                        <button>Order Online</button>
                    </div>
                ))}
            </div>
            

        </div>
        <div className="navigation">
                <button onClick={handlePrev}>&#10094;</button>
                <button onClick={handleNext}>&#10095;</button>
        </div>

            
            <style jsx>{`
                .slider-container {
                    width: 92%;
                    margin: 10px auto;
                    padding-top:50px;
                    padding-bottom:50px;
                    position: relative;
                    overflow: hidden;
                    border-radius: 10px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                }

                .slider {
                    display: flex;                   
                    transition: transform 0.5s ease-in-out;
                }

                .card {
                    min-width: 300px;
                    min-height:340px;
                    margin: 10px;
                    background: #fff;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    text-align: center;
                    border:2px solid white;
                }

                .card h3 {
                    font-size: 18px;
                    margin: 15px 0;
                }

                .card button {
                    background: #d4af37;
                    border: none;
                    color: white;
                    padding: 10px 20px;
                    margin-bottom: 15px;
                    font-size: 16px;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .card button:hover {
                    background: #c7982e;
                }

                .navigation {
                    position: relative;
                    top: -50%;
                    margin-left:10px;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    transform: translateX(-5px);
                }

                .navigation button {
                    border:2px solid black;
                    color: white;
                    font-size: 18px;
                    padding: 10px 20px;
                    cursor: pointer;
                    border-radius: 5px;
                    backdrop-filter:blur(5px);
                }

                .navigation button:hover {
                    background: rgba(0, 0, 0, 0.8);
                }
            `}</style>
        </div>
    );
}

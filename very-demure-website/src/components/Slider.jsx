import { useState } from "react";
import ButtonSlider from "./ButtonSlider";
import dataSlider from "../assets/dataSlider";
import "./slider.css";

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === dataSlider.length) {
            setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length);
        }
    };

    return (
        <div className='container-slider relative'>
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={
                            slideIndex === index + 1
                                ? "slide rounded-sm active-anim"
                                : "slide rounded-md"
                        }>
                        <img
                            className='absolute z-10'
                            src={`/images/slider${index + 1}.jpg`}
                        />
                        <h2 className='absolute w-full top-0 py-3 font-special font-medium text-center text-dark text-2xl z-50  bg-neutral backdrop-blur-md bg-opacity-40'>
                            {obj.title}
                        </h2>
                        <p className='absolute bottom-0 text-dark text-lg z-50 w-full py-3 px-3 bg-neutral backdrop-blur-md bg-opacity-40'>
                            {obj.subtitle}
                        </p>
                    </div>
                );
            })}
            <ButtonSlider moveSlide={nextSlide} direction={"next"} />
            <ButtonSlider moveSlide={prevSlide} direction={"prev"} />
        </div>
    );
}

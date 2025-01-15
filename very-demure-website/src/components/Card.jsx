import { useState } from "react";

const Card = ({ subtitle, text, image, price }) => {
    const [isClicked, setIsClicked] = useState(false);
    function handleClick() {
        setIsClicked(!isClicked);
    }
    return (
        <div
            className={`m-6 border-dark border-dashed border-[1px] border-opacity-30 rounded-md ${
                isClicked ? "bg-brand" : "bg-opacity-50"
            }`}
            onClick={handleClick}>
            <h3 className='text-dark font-bold text-3xl font-special text-center p-4'>
                {subtitle}
            </h3>
            <img src={image} alt='image' />
            <p className='px-6 py-4 text-light text-lg'>{text}</p>
            <h5 className='text-center text-dark text-xl'>{price}</h5>
        </div>
    );
};

export default Card;

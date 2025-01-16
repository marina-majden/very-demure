import { useState } from "react";
import { motion } from "motion/react";

const Card = ({ subtitle, text, image, price }) => {
    const [isClicked, setIsClicked] = useState(false);
    function handleClick() {
        setIsClicked(!isClicked);
    }
    return (
        <motion.div
            className={`m-4 rounded-md border-neutral border-opacity-20 border-t-neutral bg-brand  ${
                isClicked ? "bg-opacity-90" : "bg-opacity-90"
            }`}
            onClick={handleClick}>
            <h3 className='text-dark font-bold text-3xl font-special text-center p-4'>
                {subtitle}
            </h3>
            <img src={image} alt='image' />
            <p className='px-6 py-4 text-bg text-lg'>{text}</p>
            <h5 className='text-center text-dark font-semibold shadow-lg pb-4 text-xl'>
                {price}
            </h5>
        </motion.div>
    );
};

export default Card;

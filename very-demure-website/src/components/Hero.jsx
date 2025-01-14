import Button from "./Button";
import Heading from "./Heading";

const Hero = () => {
    return (
        <div>
            <div className='z-10'>
                <img
                    src='../../public/images/jose-martin-ramirez-carrasco-45sjAjSjArQ-unsplash.jpg'
                    alt='heroimage'
                />
            </div>
            <div className='absolute w-[200%] h-[200%] -top-12 bg-brand transform-cpu rotate-[35deg] z-0 opacity-20'></div>
            <div className='absolute sm:w-full md:w-[80%] lg:w-8/12 lg:top-1/3 lg:left-1/3 z-20'>
                <Heading
                    size='text-7xl'
                    color='dark'
                    text='Very demure design.'
                />
                <h2 className='mt-6 px-6 py-6 font-special font-semibold text-3xl text-right text-pretty'>
                    When you need to hide your wild side.
                </h2>
                <div className='flex flex-col items-end p-12'>
                    <label
                        className='text-dark font-body text-lg uppercase'
                        htmlFor='cta'>
                        Already know what you want?
                    </label>
                    <Button label="Let's get to work!" href='#contact' />
                </div>
            </div>
        </div>
    );
};

export default Hero;

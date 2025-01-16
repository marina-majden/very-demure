import Button from "./Button";
import Heading from "./Heading";
import Photo from "./Photo";

const Hero = () => {
    return (
        <div className='w-screen h-screen bg-hero-background  bg-cover'>
            <div className='sm:hidden md:block max-h-screen overflow-y-hidden'>
                <div className='absolute w-[90%] h-[150%] -top-[20%] left-[25%] bg-brandLight transform-cpu rotate-[-70deg] z-0 opacity-100'></div>
                <div className='absolute top-1/3 right-6 h-1/2 py-4 flex flex-col justify-around items-end'>
                    <Heading
                        size='lg:text-8xl'
                        color='dark'
                        weight='font-extrabold'
                        text='Very demure design.'
                    />
                    <Heading
                        size='text-5xl'
                        color='dark'
                        weight='font-extrabold'
                        text='When you need to hide your wild side.'
                    />

                    <div className='min-w-[250px] w-fit m-2 px-6 py-2 flex flex-col items-center content-center'>
                        <label
                            className='text-dark opacity-90 font-body text-xl'
                            htmlFor='cta'>
                            Already know what you want?
                        </label>
                        <Button label="Let's get to work!" href='#contact' />
                    </div>
                </div>
            </div>
            <div className='sm:block md:hidden h-screen'>
                <div className='w-screen h-screen flex flex-col justify-around content-around items-stretch'>
                    <div className='w-full h-full bg-brandDim z-20 opacity-100'></div>
                    <Photo
                        src='/images/ricardo-gomez-angel-wf0md8BGHXk-unsplash.jpg'
                        style='opacity-80 z-10'
                    />
                </div>

                <div className='absolute top-16 right-2 h-1/2 py-4 flex flex-col justify-evenly items-end z-30'>
                    <Heading
                        size='text-6xl'
                        color='dark'
                        weight='font-extrabold'
                        text='Very demure design.'
                    />
                    <Heading
                        size='text-3xl'
                        color='dark'
                        weight='font-bold'
                        text='When you need to hide your wild side.'
                    />

                    <div className='min-w-[250px] w-fit m-4 px-6 py-0 flex flex-col items-center content-center'>
                        <label
                            className='text-dark opacity-90 font-body text-lg'
                            htmlFor='cta'>
                            Already know what you want?
                        </label>
                        <Button label="Let's get to work!" href='#contact' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

import Button from "./Button";
import Heading from "./Heading";
import Photo from "./Photo";

const Hero = () => {
    return (
        <div className='w-screen h-screen bg-clip-content static'>
            <div className='relative top-0 left-0 w-screen max-w-[100%] h-auto max-h-[100%]'>
                <div className='z-10'>
                    <Photo
                        src='/images/andy-beales-BjcGdM-mjL0-unsplash.jpg'
                        style=' opacity-80'
                    />
                </div>
                <div className='absolute w-[150%] h-[120%] -top-[5%] left-[35%] bg-brand transform-cpu rotate-[30deg] z-0 opacity-90'></div>
                <div className='absolute sm:w-full sm:top-[20%] md:w-[80%] lg:w-8/12 lg:top-1/3 lg:left-1/3 z-20 pt-6'>
                    <Heading
                        size='text-7xl'
                        color='dark'
                        weight='text-bold'
                        text='Very demure design.'
                    />
                    <Heading
                        size='text-4xl'
                        color='dark'
                        weight='text-bold'
                        text='When you need to hide your wild side.'
                    />

                    <div className='m-6 px-6 py-2 flex flex-col items-end p-12'>
                        <label
                            className='text-dark font-body text-lg uppercase'
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

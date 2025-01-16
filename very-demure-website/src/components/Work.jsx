import Heading from "./Heading";
import Slider from "./Slider";

const Work = () => {
    return (
        <div className='w-full'>
            <Heading
                size='text-8xl'
                color='dark'
                weight='font-extrabold'
                text='Work'
            />
            <Slider className='sm:w-screen lg:w-[80%' />
        </div>
    );
};

export default Work;

import Heading from "./Heading";
import Photo from "./Photo";

const About = () => {
    return (
        <div className='mt-4 mb-2 mx-auto px-0 py-4'>
            <Heading size='text-6xl' color='dark' text='About' />
            <p className='md:w-9/12 sm:w-11/12 md:px-4 sm:px-2 md:py-6 sm:py-2 mx-auto sm:text-xl md:text-2xl xl:text-3xl text-pretty font-body'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
                unde labore reiciendis, adipisci voluptatibus optio in nulla
                ipsam? Laboriosam, animi? Neque ipsa a eum modi ex officiis,
                earum quos quibusdam.
            </p>

            <Photo
                src='/images/lenin-estrada-xabrCXIPghw-unsplash.jpg'
                style='sm:w-screen sm:h-auto py-2 mx-auto my-0 opacity-80'
            />
        </div>
    );
};

export default About;

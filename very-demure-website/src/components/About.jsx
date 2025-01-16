import Heading from "./Heading";

const About = () => {
    return (
        <div className='w-screen h-max mx-auto px-0 py-8 bg-about-background bg-cover bg-brandLight bg-blend-soft-light z-40 md:h-full lg:h-screen'>
            <Heading
                size='text-8xl'
                color='dark'
                weight='font-extrabold'
                text='About'
            />

            <p className='md:w-9/12 sm:w-11/12 md:px-4 sm:px-2 md:py-6 sm:py-2 mx-auto mt-6 sm:text-xl md:text-2xl xl:text-3xl text-pretty font-body font-bold'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
                unde labore reiciendis, adipisci voluptatibus optio in nulla
                ipsam? Laboriosam, animi? Neque ipsa a eum modi ex officiis,
                earum quos quibusdam.
            </p>
            <p className='md:w-9/12 sm:w-11/12 md:px-4 sm:px-2 md:py-6 sm:py-2 mx-auto sm:text-xl md:text-2xl xl:text-3xl text-pretty font-body'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id et
                aspernatur asperiores ipsam labore, sit minima! Nostrum non sit
                ratione quas recusandae eaque ipsum tempora saepe provident
                impedit. Soluta, aliquam!
            </p>
        </div>
    );
};

export default About;

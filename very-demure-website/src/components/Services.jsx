import Card from "./Card";

const Services = () => {
    return (
        <div
            id='services'
            className='w-11/12 min-h-screen p-4 flex justify-around align-middle items-center relative'>
            <div className='h-full absolute top-2 left-2'>
                <h1 className='text-9xl text-dark font-extrabold text-vertical-lr rotate-180 font-special text-center px-2 py-24 m-auto sticky top-6'>
                    Services
                </h1>
            </div>

            <div className='w-2/3'>
                <Card
                    subtitle='Service One'
                    image='/images/jose-martin-ramirez-carrasco-45sjAjSjArQ-unsplash.jpg'
                    text='Lorem ipsum dolor sit amet i dolor sit amet is lorem for you to figure out.'
                    price='500$'
                />

                <Card
                    subtitle='Service Two'
                    image='/images/lenin-estrada-xabrCXIPghw-unsplash.jpg'
                    text='Lorem ipsum dolor sit amet i dolor sit amet is lorem for you to figure out.'
                    price='1000$'
                />

                <Card
                    subtitle='Service Three'
                    image='/images/yasuo-takeuchi-vwCBWU4wHhU-unsplash.jpg'
                    text='Lorem ipsum dolor sit amet i dolor sit amet is lorem for you to figure out.'
                    price='1500$'
                />
            </div>
        </div>
    );
};

export default Services;

import Heading from "./Heading";
import Card from "./Card";

const Services = () => {
    return (
        <div id='services'>
            <Heading size='text-4xl' color='dark' text='Services' />
            <div className='flex sm:flex-col lg:flex-row w-full'>
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

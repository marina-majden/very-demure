import Heading from "./Heading";
import Card from "./Card";

const Services = () => {
    return (
        <div id='services'>
            <Heading size='text-4xl' color='dark' text='Services' />
            <div>
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Services;

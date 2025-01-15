const Heading = ({ color, text, size, weight }) => {
    return (
        <h1
            className={`font-bodoni ${size} ${weight} text-${color} text-center py-2 sm:px-4 lg:px-12'`}>
            {text}
        </h1>
    );
};
export default Heading;

const Heading = ({ color, text, size, weight, other }) => {
    return (
        <h1
            className={`font-special ${size} ${weight} text-${color} text-center py-2 sm:px-4 lg:px-12 ${other}'`}>
            {text}
        </h1>
    );
};
export default Heading;

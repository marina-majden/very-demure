const Heading = ({ color, text, size }) => {
    return (
        <h1
            className={`font-special font-bold ${size} text-${color} text-center sm:px-4 lg:px-12'`}>
            {text}
        </h1>
    );
};
export default Heading;

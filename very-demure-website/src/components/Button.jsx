const Button = ({ label, href }) => {
    return (
        <button
            type='button'
            className={`bg-dark font-body uppercase font-medium  text-neutral text-xl  border-neutral border-opacity-60 border-[0.5px] hover:bg-accent hover:bg-opacity-80 hover:border-dark hover:text-dark hover:shadow-md transition-all duration-300 px-8 py-2 m-4 rounded-md tracking-wider`}
            href='{href}'>
            {label}
        </button>
    );
};
export default Button;

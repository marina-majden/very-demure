import { Link } from "react-scroll";

const Navbar = () => {
    const links = [
        { link: "About", section: "about" },
        { link: "Services", section: "services" },
        { link: "Work", section: "work" },
        { link: "Contact", section: "contact" },
    ];
    return (
        <div className='w-screen h-fit px-1 py-2 fixed z-50'>
            <ul className='flex flex-col mx-6 mt-4 items-end'>
                {links.map((link, index) => {
                    return (
                        <li key={index} className='group'>
                            <Link
                                to={link.section}
                                smooth={true}
                                spy={true}
                                duration={500}
                                offset={-130}
                                className='cursor-pointer text-dark text-lg font-semibold uppercase hover:text-accent hover:lowercase transition-all duration-300'>
                                {link.link}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Navbar;

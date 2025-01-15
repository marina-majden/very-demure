import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

function App() {
    return (
        <>
            <Navbar />
            <div className='flex-col justify-evenly items-stretch gap-8'>
                <Hero />
                <About />
                <Services />
                <Work />
                <Contact />
            </div>

            <Footer />
        </>
    );
}

export default App;

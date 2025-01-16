import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import { BlurGradientBg } from "./assets/BlurGradientBg.module";

/* import { BigBlobBg } from "jsm/BigBlobBg.module.js"

let colorbg = new BigBlobBg({
	dom: "box",
	colors: ["#e8eee7","#E7F8E6","#d1e8ca","#cee5c8","#bee9ba","#c6c9c5"],
	loop: true
})
		 */

function App() {
    return (
        <>
            <Navbar />
            <div
                id='page'
                className='flex flex-col justify-between items-center'>
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

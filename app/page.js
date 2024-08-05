import About from "./ui/components/About";
import Contact from "./ui/components/Contact";
import Cursor from "./ui/components/Cursor";
import Hero from "./ui/components/Hero";
import Loader from "./ui/components/Loader";
import Navbar from "./ui/components/Navbar";
import SelectedWorks from "./ui/components/SelectedWorks";

const Home = () => {
  return (
    <>
      <Loader />
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <SelectedWorks />
      <Contact />
    </>
  )
}

export default Home;


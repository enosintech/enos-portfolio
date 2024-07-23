import About from "./ui/components/About";
import Contact from "./ui/components/Contact";
import Cursor from "./ui/components/Cursor";
import Hero from "./ui/components/Hero";
import Loader from "./ui/components/Loader";
import Navbar from "./ui/components/Navbar";
import Work from "./ui/components/Work";

const Home = () => {
  return (
    <>
      <Loader />
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  )
}

export default Home;


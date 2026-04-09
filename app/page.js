import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Courses from "./components/Courses";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <Gallery />
      <FAQ />
    </>
  );
}
import Navigation from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";

export default function Home() {
    return (
        <>
            <Navigation/>
            <Hero/>
            <About/>
            <Services/>
        </>
    );
}
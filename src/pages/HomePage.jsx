import DiscoverSection from "../components/home/DiscoverSection";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";

const HomePage = () => {
    return (
        <div>
            <main>
                <Hero/>
                <DiscoverSection/>
                <HowItWorks/>
            </main>
        </div>
    );
};

export default HomePage;
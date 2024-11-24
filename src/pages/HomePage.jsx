import DiscoverSection from "../components/home/DiscoverSection";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import States from "../components/home/States";

const HomePage = () => {
    return (
        <div>
            <main>
                <Hero/>
                <DiscoverSection/>
                <HowItWorks/>
                <States/>
            </main>
        </div>
    );
};

export default HomePage;
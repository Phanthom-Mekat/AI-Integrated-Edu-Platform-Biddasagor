import DiscoverSection from "../components/home/DiscoverSection";
import Faq from "../components/home/FAQ";
import Foooter from "../components/home/Foooter";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Pricing from "../components/home/Pricing";
import States from "../components/home/States";

const HomePage = () => {
    return (
        <div>
            <main>
                <Hero/>
                <DiscoverSection/>
                <HowItWorks/>
                <States/>
                <Pricing/>
                <Faq/>
                <Foooter/>
            </main>
        </div>
    );
};

export default HomePage;
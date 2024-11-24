import DiscoverSection from "../components/home/DiscoverSection";
import Faq from "../components/home/FAQ";
import Foooter from "../components/home/Foooter";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Pricing from "../components/home/Pricing";
import States from "../components/home/States";
import SubjectHelp from "../components/home/SubjectHelp";
import Testimonial from "../components/home/Testimonial";

const HomePage = () => {
    return (
        <div>
            <main>
                <Hero/>
                <DiscoverSection/>
                <HowItWorks/>
                <SubjectHelp />
                <States/>
                <Pricing/>
                <Faq/>
                <Testimonial/>
                <Foooter/>
            </main>
        </div>
    );
};

export default HomePage;
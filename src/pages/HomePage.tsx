import Hero from '../components/Hero';
import Features from '../components/Features';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Features />
            <AboutSection />
            <Testimonials />
            <CallToAction />
        </div>
    );
};

export default HomePage;

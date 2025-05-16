import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import './index.css';

function App() {
    // Scroll to top on page change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-[#0a0a1a]">
                <Navbar />
                <main className="flex-grow bg-gradient-to-b from-[#0a0a1a] to-[#131339]">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/product" element={<ProductPage />} />
                        <Route
                            path="/testimonials"
                            element={<TestimonialsPage />}
                        />
                        <Route path="/faq" element={<FaqPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

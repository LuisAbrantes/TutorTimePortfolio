import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <nav className="bg-[#0c0c1d] py-4 px-6 sticky top-0 z-50 shadow-lg shadow-indigo-900/20">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <img
                        src="/TutorTimeMainLogo.png"
                        alt="TutorTime Logo"
                        className="h-10 w-10 mr-3 rounded-full object-cover rounded-logo"
                        onError={e => {
                            e.currentTarget.src = '/vite.svg'; // Fallback to vite logo if TutorTimeMainLogo.png is not found
                        }}
                    />
                    <span className="text-xl font-bold text-white">
                        TutorTime
                    </span>
                </Link>

                {/* Desktop menu */}
                <div className="hidden md:flex space-x-8">
                    <Link
                        to="/"
                        className={`${
                            isActive('/') ? 'text-indigo-400' : 'text-white'
                        } hover:text-indigo-400 transition duration-300 px-3 py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-indigo-500 after:invisible hover:after:visible after:transition-all after:duration-300`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={`${
                            isActive('/about')
                                ? 'text-indigo-400'
                                : 'text-white'
                        } hover:text-indigo-400 transition duration-300 px-3 py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-indigo-500 after:invisible hover:after:visible after:transition-all after:duration-300`}
                    >
                        Sobre
                    </Link>
                    <Link
                        to="/product"
                        className={`${
                            isActive('/product')
                                ? 'text-indigo-400'
                                : 'text-white'
                        } hover:text-indigo-400 transition duration-300 px-3 py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-indigo-500 after:invisible hover:after:visible after:transition-all after:duration-300`}
                    >
                        Produto
                    </Link>
                    <Link
                        to="/testimonials"
                        className={`${
                            isActive('/testimonials')
                                ? 'text-indigo-400'
                                : 'text-white'
                        } hover:text-indigo-400 transition duration-300 px-3 py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-indigo-500 after:invisible hover:after:visible after:transition-all after:duration-300`}
                    >
                        Depoimentos
                    </Link>
                    <Link
                        to="/faq"
                        className={`${
                            isActive('/faq') ? 'text-indigo-400' : 'text-white'
                        } hover:text-indigo-400 transition duration-300 px-3 py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-indigo-500 after:invisible hover:after:visible after:transition-all after:duration-300`}
                    >
                        FAQ
                    </Link>
                    <Link
                        to="/contact"
                        className={`${
                            isActive('/contact')
                                ? 'text-indigo-400'
                                : 'text-white'
                        } hover:text-indigo-400 transition duration-300 px-3 py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-indigo-500 after:invisible hover:after:visible after:transition-all after:duration-300`}
                    >
                        Contato
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-darkAlt mt-4 py-4 px-6 rounded-lg animate-fade-in">
                    <div className="flex flex-col space-y-4">
                        <Link
                            to="/"
                            className={`${
                                isActive('/') ? 'text-indigo-400' : 'text-white'
                            } hover:text-indigo-400 transition duration-300`}
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className={`${
                                isActive('/about')
                                    ? 'text-indigo-400'
                                    : 'text-white'
                            } hover:text-indigo-400 transition duration-300`}
                            onClick={() => setIsOpen(false)}
                        >
                            Sobre
                        </Link>
                        <Link
                            to="/product"
                            className={`${
                                isActive('/product')
                                    ? 'text-indigo-400'
                                    : 'text-white'
                            } hover:text-indigo-400 transition duration-300`}
                            onClick={() => setIsOpen(false)}
                        >
                            Produto
                        </Link>
                        <Link
                            to="/testimonials"
                            className={`${
                                isActive('/testimonials')
                                    ? 'text-indigo-400'
                                    : 'text-white'
                            } hover:text-indigo-400 transition duration-300`}
                            onClick={() => setIsOpen(false)}
                        >
                            Depoimentos
                        </Link>
                        <Link
                            to="/faq"
                            className={`${
                                isActive('/faq')
                                    ? 'text-indigo-400'
                                    : 'text-white'
                            } hover:text-indigo-400 transition duration-300`}
                            onClick={() => setIsOpen(false)}
                        >
                            FAQ
                        </Link>
                        <Link
                            to="/contact"
                            className={`${
                                isActive('/contact')
                                    ? 'text-indigo-400'
                                    : 'text-white'
                            } hover:text-indigo-400 transition duration-300`}
                            onClick={() => setIsOpen(false)}
                        >
                            Contato
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

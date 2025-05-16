import { Link } from 'react-router-dom';
import {
    Mail,
    Phone,
    Facebook,
    Twitter,
    Instagram,
    Linkedin
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0c0c1d] text-white py-12 mt-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Information */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-indigo-400">
                        TutorTime
                    </h3>
                    <p className="mb-4 text-sm">
                        Simplificando o acesso às monitorias e reforços para
                        instituições de ensino.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-primary transition duration-300"
                        >
                            <Facebook size={20} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-primary transition duration-300"
                        >
                            <Twitter size={20} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-primary transition duration-300"
                        >
                            <Instagram size={20} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-primary transition duration-300"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                to="/"
                                className="text-gray-400 hover:text-primary transition duration-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="text-gray-400 hover:text-primary transition duration-300"
                            >
                                Sobre Nós
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/product"
                                className="text-gray-400 hover:text-primary transition duration-300"
                            >
                                Nosso Produto
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/testimonials"
                                className="text-gray-400 hover:text-primary transition duration-300"
                            >
                                Depoimentos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                className="text-gray-400 hover:text-primary transition duration-300"
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Contato</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center">
                            <Phone size={18} className="mr-2 text-primary" />
                            <a
                                href="https://wa.me/5512981451610"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                +55 12 98145-1610
                            </a>
                        </li>
                        <li className="flex items-center">
                            <Mail size={18} className="mr-2 text-primary" />
                            <a
                                href="mailto:tutortimeadm@gmail.com"
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                tutortimeadm@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                    <p className="mb-4 text-sm text-gray-400">
                        Inscreva-se para receber novidades e atualizações.
                    </p>
                    <form className="flex flex-col space-y-2">
                        <input
                            type="email"
                            placeholder="Seu email"
                            className="px-4 py-2 rounded bg-dark text-white border border-gray-700 focus:border-primary focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 rounded bg-primary hover:bg-secondary text-white transition duration-300"
                        >
                            Inscrever
                        </button>
                    </form>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto px-6 pt-8 mt-8 border-t border-gray-800">
                <p className="text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} TutorTime. Todos os
                    direitos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

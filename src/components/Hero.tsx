import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative min-h-[90vh] flex items-center justify-center bg-[#010101] overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c1d] via-[#131339] to-[#010101]"></div>

            {/* Purple circles for background effect */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-40 right-20 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl"></div>

            <div className="container mx-auto px-6 z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight animate-fade-in">
                    Sua instituição, nossa missão: <br />
                    <span className="text-indigo-400">
                        aulas claras, alunos presentes
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Transformamos a maneira como instituições de ensino
                    organizam aulas de reforço e monitorias, facilitando o
                    acesso aos alunos e aumentando a frequência.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                    <Link
                        to="/product"
                        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1 shadow-lg shadow-indigo-600/30"
                    >
                        Conheça o TutorTime
                        <ArrowRight size={18} />
                    </Link>

                    <Link
                        to="/contact"
                        className="px-8 py-3 bg-transparent hover:bg-indigo-900/30 border border-indigo-400 text-indigo-400 hover:text-white rounded-full font-medium transition duration-300 flex items-center justify-center transform hover:-translate-y-1"
                    >
                        Agende uma demonstração
                    </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                    <div className="p-6 bg-gray-900/40 backdrop-blur-sm rounded-xl border border-indigo-500/20">
                        <h3 className="text-4xl font-bold text-indigo-400 mb-2">
                            +50%
                        </h3>
                        <p className="text-gray-300">
                            Aumento na frequência de alunos
                        </p>
                    </div>

                    <div className="p-6 bg-gray-900/40 backdrop-blur-sm rounded-xl border border-indigo-500/20">
                        <h3 className="text-4xl font-bold text-indigo-400 mb-2">
                            +300
                        </h3>
                        <p className="text-gray-300">
                            Instituições satisfeitas
                        </p>
                    </div>

                    <div className="p-6 bg-gray-900/40 backdrop-blur-sm rounded-xl border border-indigo-500/20">
                        <h3 className="text-4xl font-bold text-indigo-400 mb-2">
                            -40%
                        </h3>
                        <p className="text-gray-300">
                            Redução em faltas e desistências
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

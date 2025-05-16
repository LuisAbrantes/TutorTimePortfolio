import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-[#0c0c1d] via-[#131339] to-[#0c0c1d] relative overflow-hidden">
            {/* Background shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/5 rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Pronto para transformar a gestão de
                        <span className="text-indigo-400"> monitorias </span>
                        na sua instituição?
                    </h2>

                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Agende uma demonstração gratuita e descubra como o
                        TutorTime pode aumentar a participação dos alunos e
                        simplificar seus processos.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition duration-300 flex items-center justify-center gap-2 text-lg shadow-lg shadow-indigo-600/30"
                        >
                            Agendar demonstração
                            <ArrowRight size={20} />
                        </Link>

                        <Link
                            to="/product"
                            className="px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white/5 rounded-full font-medium transition duration-300 flex items-center justify-center text-lg"
                        >
                            Conhecer mais
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;

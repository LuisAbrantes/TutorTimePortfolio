import ProductDemo from '../components/ProductDemo';
import CallToAction from '../components/CallToAction';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';

const ProductPage = () => {
    return (
        <div>
            <div className="bg-dark py-20 relative overflow-hidden">
                {/* Background effect */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Conheça a{' '}
                            <span className="text-white">Plataforma</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Uma solução completa para organizar monitorias e
                            reforços, tornando-os mais acessíveis e aumentando a
                            participação dos alunos.
                        </p>
                    </div>
                </div>
            </div>

            <ProductDemo />
            <Features />

            {/* Benefits Section */}
            <section className="py-20 bg-darkAlt">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Benefícios para{' '}
                            <span className="text-white">sua Instituição</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Veja como o TutorTime pode transformar a experiência
                            de monitorias para alunos, professores e gestores
                            educacionais.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* For Students */}
                        <div className="bg-dark p-8 rounded-xl border border-gray-800 transition-all duration-300 hover:border-primary/50">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <span className="bg-primary/20 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3 font-normal">
                                    1
                                </span>
                                Para Alunos
                            </h3>

                            <ul className="space-y-4">
                                <li className="text-gray-300 flex items-start">
                                    <span className="text-white mr-2">•</span>
                                    <span>
                                        Visualização clara de todas as
                                        monitorias disponíveis
                                    </span>
                                </li>
                                <li className="text-gray-300 flex items-start">
                                    <span className="text-white mr-2">•</span>
                                    <span>
                                        Lembretes automáticos sobre horários e
                                        alterações
                                    </span>
                                </li>
                                <li className="text-gray-300 flex items-start">
                                    <span className="text-white mr-2">•</span>
                                    <span>
                                        Acesso via aplicativo móvel ou navegador
                                        web
                                    </span>
                                </li>
                                <li className="text-gray-300 flex items-start">
                                    <span className="text-white mr-2">•</span>
                                    <span>
                                        Possibilidade de avaliar e dar feedback
                                        sobre as monitorias
                                    </span>
                                </li>
                                <li className="text-gray-300 flex items-start">
                                    <span className="text-white mr-2">•</span>
                                    <span>
                                        Histórico de participação e progresso
                                        pessoal
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* For Teachers */}
                        <div className="bg-dark p-8 rounded-xl border border-gray-800 transition-all duration-300 hover:border-primary/50">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <span className="bg-primary/20 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3 font-normal">
                                    2
                                </span>
                                Para Professores
                            </h3>

                            <ul className="space-y-4">
                                <li className="text-gray-300 flex items-start">
                                    <span className="text-white mr-2">•</span>
                                    <span>
                                        Gestão simplificada de horários e
                                        disponibilidade
                                    </span>
                                </li>
                                <li className="text-gray-300 flex items-start">
                                    <span className="text-white mr-2">•</span>
                                    <span>
                                        Acompanhamento da frequência e
                                        participação dos alunos
                                    </span>
                                </li>
                                <li className="text-gray-300 flex items-start">
                                    <span className="text-white mr-2">•</span>
                                    <span>
                                        Comunicação direta com alunos sobre
                                        dúvidas e material
                                    </span>
                                </li>
                                <li className="text-gray-300 flex items-start">
                                    <span className="text-white mr-2">•</span>
                                    <span>
                                        Relatórios detalhados sobre desempenho e
                                        temas abordados
                                    </span>
                                </li>
                                <li className="text-gray-300 flex items-start">
                                    <span className="text-white mr-2">•</span>
                                    <span>
                                        Menos tempo gasto com tarefas
                                        administrativas
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* For Institutions */}
                        <div className="bg-dark p-8 rounded-xl border border-gray-800 transition-all duration-300 hover:border-primary/50">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <span className="bg-primary/20 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3 font-normal">
                                    3
                                </span>
                                Para Instituições
                            </h3>

                            <ul className="space-y-4">
                                <li className="text-gray-300 flex items-start">
                                    <span className="text-white mr-2">•</span>
                                    <span>
                                        Aumento significativo na participação em
                                        monitorias
                                    </span>
                                </li>
                                <li className="text-gray-300 flex items-start">
                                    <span className="text-white mr-2">•</span>
                                    <span>
                                        Redução de evasão e melhoria no
                                        desempenho acadêmico
                                    </span>
                                </li>
                                <li className="text-gray-300 flex items-start">
                                    <span className="text-white mr-2">•</span>
                                    <span>
                                        Otimização de recursos humanos e
                                        infraestrutura
                                    </span>
                                </li>
                                <li className="text-gray-300 flex items-start">
                                    <span className="text-white mr-2">•</span>
                                    <span>
                                        Análises e métricas para tomada de
                                        decisões estratégicas
                                    </span>
                                </li>
                                <li className="text-gray-300 flex items-start">
                                    <span className="text-white mr-2">•</span>
                                    <span>
                                        Diferencial competitivo no mercado
                                        educacional
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
            <CallToAction />
        </div>
    );
};

export default ProductPage;

import { Target, Users, RefreshCw } from 'lucide-react';

const AboutSection = () => {
    return (
        <section className="py-20 bg-[#0c0c1d] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#010101] to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Sobre a{' '}
                            <span className="text-indigo-400">TutorTime</span>
                        </h2>

                        <p className="text-gray-300 mb-6">
                            A TutorTime nasceu da percepção de um problema comum
                            em instituições de ensino: a dificuldade de
                            organizar e comunicar eficientemente os horários de
                            aulas de reforço e monitorias, resultando em baixa
                            participação dos alunos.
                        </p>

                        <p className="text-gray-300 mb-6">
                            Fundada em 2023 por um grupo de educadores e
                            desenvolvedores apaixonados por tecnologia
                            educacional, nossa empresa tem como missão
                            transformar a maneira como as instituições gerenciam
                            suas monitorias, tornando o acesso mais claro e
                            aumentando o engajamento dos estudantes.
                        </p>

                        <p className="text-gray-300">
                            Hoje, o TutorTime é utilizado por centenas de
                            instituições em todo o Brasil, ajudando a melhorar o
                            desempenho acadêmico de milhares de alunos através
                            de um acesso mais eficiente às aulas de reforço.
                        </p>
                    </div>

                    <div>
                        <div className="bg-[#131339]/60 p-8 rounded-xl border border-indigo-900/40 shadow-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Missão */}
                                <div className="p-6 bg-[#0c0c1d] rounded-lg border border-indigo-600/20 hover:border-indigo-500/40 transition-all duration-300">
                                    <div className="p-3 bg-indigo-600/20 inline-flex rounded-lg mb-4">
                                        <Target
                                            size={24}
                                            className="text-white"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">
                                        Missão
                                    </h3>
                                    <p className="text-gray-400">
                                        Facilitar o acesso às aulas de reforço e
                                        monitorias, maximizando a participação
                                        dos alunos e contribuindo para melhorar
                                        o desempenho acadêmico.
                                    </p>
                                </div>

                                {/* Visão */}
                                <div className="p-6 bg-[#0c0c1d] rounded-lg border border-indigo-600/20 hover:border-indigo-500/40 transition-all duration-300">
                                    <div className="p-3 bg-indigo-600/20 inline-flex rounded-lg mb-4">
                                        <Users
                                            size={24}
                                            className="text-white"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">
                                        Visão
                                    </h3>
                                    <p className="text-gray-400">
                                        Ser a plataforma líder em gestão de
                                        aulas de reforço, reconhecida por
                                        transformar a experiência educacional de
                                        instituições em todo o país.
                                    </p>
                                </div>

                                {/* Valores */}
                                <div className="p-6 bg-[#0c0c1d] rounded-lg border border-indigo-600/20 hover:border-indigo-500/40 transition-all duration-300 md:col-span-2">
                                    <div className="p-3 bg-indigo-600/20 inline-flex rounded-lg mb-4">
                                        <RefreshCw
                                            size={24}
                                            className="text-white"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">
                                        Valores
                                    </h3>
                                    <ul className="text-gray-400 space-y-2">
                                        <li>
                                            • Inovação constante para melhorar a
                                            experiência educacional
                                        </li>
                                        <li>
                                            • Compromisso com a clareza e
                                            simplicidade de uso
                                        </li>
                                        <li>
                                            • Foco no resultado acadêmico dos
                                            estudantes
                                        </li>
                                        <li>
                                            • Parceria genuína com as
                                            instituições de ensino
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

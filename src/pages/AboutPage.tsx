import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AboutSection from '../components/AboutSection';
import CallToAction from '../components/CallToAction';
import { createPlaceholder } from '../utils/placeholdersUtils';

const AboutPage = () => {
    const teamMembers = [
        {
            name: 'João Silva',
            role: 'CEO & Fundador',
            bio: 'Ex-educador com mais de 15 anos de experiência, João identificou os problemas de gestão de monitorias e fundou a TutorTime para revolucionar o setor.',
            photo: 'https://i.pravatar.cc/300?img=12'
        },
        {
            name: 'Marina Costa',
            role: 'CTO',
            bio: 'Desenvolvedora fullstack com experiência em startups de educação, Marina lidera a equipe de tecnologia e desenvolvimento de produto da TutorTime.',
            photo: 'https://i.pravatar.cc/300?img=25'
        },
        {
            name: 'Rafael Mendes',
            role: 'Diretor Pedagógico',
            bio: 'Com doutorado em Educação, Rafael garante que a plataforma TutorTime atenda às necessidades reais de alunos e educadores.',
            photo: 'https://i.pravatar.cc/300?img=2'
        },
        {
            name: 'Carolina Duarte',
            role: 'Head de Customer Success',
            bio: 'Especialista em experiência do cliente, Carolina e sua equipe garantem que todas as instituições parceiras aproveitem ao máximo a plataforma.',
            photo: 'https://i.pravatar.cc/300?img=9'
        }
    ];

    return (
        <div>
            <div className="bg-gradient-to-b from-[#0c0c1d] via-[#131339] to-[#0c0c1d] py-20 relative overflow-hidden">
                {/* Background effect */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            <span className="text-indigo-400">História</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Conheça a equipe e a missão por trás do TutorTime,
                            transformando a maneira como instituições de ensino
                            gerenciam aulas de reforço e monitorias.
                        </p>
                    </div>
                </div>
            </div>

            <AboutSection />

            {/* Timeline */}
            <section className="py-20 bg-[#010101] relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Nossa <span className="text-indigo-400">Jornada</span>
                    </h2>

                    <div className="relative max-w-3xl mx-auto">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-900/40"></div>

                        {/* Timeline items */}
                        <div className="space-y-12">
                            <div className="relative">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
                                <div className="ml-0 md:ml-auto md:mr-[50%] md:pr-12 md:w-1/2 p-6 bg-darkAlt rounded-xl border border-gray-800">
                                    <h3 className="text-white font-bold text-xl mb-2">
                                        2023
                                    </h3>
                                    <h4 className="text-primary font-medium mb-3">
                                        O Nascimento
                                    </h4>
                                    <p className="text-gray-400">
                                        A TutorTime é fundada após nosso CEO
                                        identificar problemas recorrentes na
                                        organização de monitorias em
                                        instituições de ensino.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
                                <div className="mr-0 md:mr-auto md:ml-[50%] md:pl-12 md:w-1/2 p-6 bg-darkAlt rounded-xl border border-gray-800">
                                    <h3 className="text-white font-bold text-xl mb-2">
                                        2023
                                    </h3>
                                    <h4 className="text-primary font-medium mb-3">
                                        Primeiros Clientes
                                    </h4>
                                    <p className="text-gray-400">
                                        Lançamento da versão beta com 5
                                        instituições parceiras que reportaram
                                        aumento de 45% na frequência das
                                        monitorias.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
                                <div className="ml-0 md:ml-auto md:mr-[50%] md:pr-12 md:w-1/2 p-6 bg-darkAlt rounded-xl border border-gray-800">
                                    <h3 className="text-white font-bold text-xl mb-2">
                                        2024
                                    </h3>
                                    <h4 className="text-primary font-medium mb-3">
                                        Expansão Nacional
                                    </h4>
                                    <p className="text-gray-400">
                                        Alcançamos a marca de 100 instituições
                                        clientes em todo o Brasil e expandimos
                                        nossa equipe para 20 colaboradores.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
                                <div className="mr-0 md:mr-auto md:ml-[50%] md:pl-12 md:w-1/2 p-6 bg-darkAlt rounded-xl border border-gray-800">
                                    <h3 className="text-white font-bold text-xl mb-2">
                                        2025
                                    </h3>
                                    <h4 className="text-primary font-medium mb-3">
                                        Presente e Futuro
                                    </h4>
                                    <p className="text-gray-400">
                                        Hoje, atendemos mais de 300 instituições
                                        e continuamos inovando para tornar as
                                        monitorias mais acessíveis e eficientes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-[#131339]/60">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Nossa <span className="text-indigo-400">Equipe</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-[#0c0c1d] rounded-xl overflow-hidden border border-indigo-900/30 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-600/10"
                            >
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-full h-64 object-cover"
                                    onError={e => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = createPlaceholder(
                                            300,
                                            300,
                                            'Foto Indisponível'
                                        );
                                    }}
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary font-medium mb-3">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Junte-se à Nossa Equipe
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                            Estamos sempre em busca de talentos apaixonados por
                            tecnologia e educação para nos ajudar a transformar
                            a experiência de monitorias.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-secondary text-white rounded-full font-medium transition duration-300 group"
                        >
                            Ver vagas abertas
                            <ArrowRight
                                size={18}
                                className="ml-2 group-hover:translate-x-1 transition-transform"
                            />
                        </Link>
                    </div>
                </div>
            </section>

            <CallToAction />
        </div>
    );
};

export default AboutPage;

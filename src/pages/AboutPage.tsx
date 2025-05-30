import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AboutSection from '../components/AboutSection';
import CallToAction from '../components/CallToAction';
import { createPlaceholder } from '../utils/placeholdersUtils';

const AboutPage = () => {
    const teamMembers = [
        {
            name: 'Luis Abrantes',
            role: 'CEO & Fundador',
            bio: 'Entusiasta tech. Experiencia em hackathons e startups, inclusive o PennApps, maior hackathon universitário do mundo, localizado na Universidade da Pensilvânia.',
            photo: '/LuisAbrantes.png'
        },
        {
            name: 'Isaque Estolano',
            role: 'CTO',
            bio: 'Descrição do Isaque.',
            photo: 'https://i.pravatar.cc/300?img=25'
        },
        {
            name: 'Cauã Almeida',
            role: 'Diretor Pedagógico',
            bio: 'Descrição do Cauã.',
            photo: 'https://i.pravatar.cc/300?img=2'
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

            {/* Team Section */}
            <section className="py-20 bg-[#131339]/60">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Nossa <span className="text-indigo-400">Equipe</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-[#0c0c1d] rounded-xl overflow-hidden border border-indigo-900/30 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-600/10"
                            >
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className={`w-full h-64 object-cover ${
                                        member.name === 'Luis Abrantes'
                                            ? 'object-position-top'
                                            : ''
                                    }`}
                                    style={
                                        member.name === 'Luis Abrantes'
                                            ? { objectPosition: '50% 15%' }
                                            : {}
                                    }
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
                                        {member.name === 'Luis Abrantes' ? (
                                            <a
                                                href="https://luisabrantes.github.io/luis.hsa/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-primary transition-colors"
                                            >
                                                {member.name}
                                            </a>
                                        ) : (
                                            member.name
                                        )}
                                    </h3>
                                    <p className="text-white font-medium mb-3">
                                        {member.role}
                                    </p>
                                    <p className="text-white text-sm">
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

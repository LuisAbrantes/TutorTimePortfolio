import { Star, Quote, Play, X } from 'lucide-react';
import { useState } from 'react';
import CallToAction from '../components/CallToAction';
import { createPlaceholder } from '../utils/placeholdersUtils';

const videoTestimonials = [
    {
        id: 1,
        thumbnail: createPlaceholder(600, 400, 'Vídeo Depoimento'),
        title: 'Como a Escola São Francisco melhorou em 70% a frequência em monitorias',
        institution: 'Escola São Francisco',
        videoId: 'example1'
    },
    {
        id: 2,
        thumbnail: createPlaceholder(600, 400, 'Vídeo Depoimento'),
        title: 'Universidade Federal reduz evasão com TutorTime',
        institution: 'Universidade Federal',
        videoId: 'example2'
    },
    {
        id: 3,
        thumbnail: createPlaceholder(600, 400, 'Vídeo Depoimento'),
        title: 'Instituto Técnico otimiza recursos e melhora comunicação',
        institution: 'Instituto Técnico Profissionalizante',
        videoId: 'example3'
    }
];

const testimonials = [
    {
        id: 1,
        content:
            'O TutorTime transformou completamente nossa gestão de aulas de reforço. A interface intuitiva facilita o agendamento e os alunos adoram a clareza com que podem visualizar todas as opções. Notamos um aumento de 60% na frequência desde que implementamos o sistema.',
        author: 'Profa. Ana Silva',
        role: 'Coordenadora Pedagógica',
        institution: 'Escola Estadual Dom Pedro II',
        avatar: 'https://i.pravatar.cc/150?img=32',
        rating: 5
    },
    {
        id: 2,
        content:
            'Como tutor, o TutorTime simplificou minha rotina. Consigo gerenciar horários, acompanhar a frequência dos alunos e me comunicar efetivamente com a coordenação. É uma ferramenta completa que otimizou nosso tempo e aumentou o engajamento dos estudantes.',
        author: 'Prof. Carlos Oliveira',
        role: 'Professor de Matemática',
        institution: 'Colégio Santa Mônica',
        avatar: 'https://i.pravatar.cc/150?img=11',
        rating: 5
    },
    {
        id: 3,
        content:
            'Implementamos o TutorTime há 6 meses e os resultados são impressionantes. O número de faltas diminuiu drasticamente e os alunos relatam que estão conseguindo acompanhar melhor as disciplinas graças à facilidade de acesso às monitorias.',
        author: 'Mariana Campos',
        role: 'Diretora Acadêmica',
        institution: 'Instituto Federal de Educação',
        avatar: 'https://i.pravatar.cc/150?img=29',
        rating: 4
    },
    {
        id: 4,
        content:
            'Como aluna, o TutorTime mudou minha experiência com monitorias. Antes era confuso encontrar os horários disponíveis, agora consigo ver tudo no aplicativo e recebo lembretes sobre as aulas. Isso me ajudou muito a melhorar minhas notas!',
        author: 'Júlia Mendes',
        role: 'Estudante',
        institution: 'Universidade Federal',
        avatar: 'https://i.pravatar.cc/150?img=5',
        rating: 5
    },
    {
        id: 5,
        content:
            'Nossa rede de escolas implementou o TutorTime há um ano e os resultados superaram nossas expectativas. Além do aumento na participação dos alunos, a plataforma nos fornece dados valiosos para melhorar continuamente nossa oferta de monitorias.',
        author: 'Roberto Almeida',
        role: 'Diretor de Tecnologia Educacional',
        institution: 'Rede Aprender Mais',
        avatar: 'https://i.pravatar.cc/150?img=7',
        rating: 5
    },
    {
        id: 6,
        content:
            'Como coordenadora, eu perdia muito tempo organizando horários e comunicando alterações de monitorias. Com o TutorTime, todo esse processo foi automatizado, permitindo que eu foque em melhorar a qualidade das sessões de reforço.',
        author: 'Helena Souza',
        role: 'Coordenadora de Ensino Médio',
        institution: 'Colégio Integrado',
        avatar: 'https://i.pravatar.cc/150?img=23',
        rating: 5
    },
    {
        id: 7,
        content:
            'Tínhamos um problema crônico de baixa participação em monitorias. Após implementar o TutorTime, com suas notificações e interface amigável, vimos um aumento de 55% na presença dos alunos logo no primeiro semestre.',
        author: 'Daniel Costa',
        role: 'Diretor',
        institution: 'Escola Municipal Paulo Freire',
        avatar: 'https://i.pravatar.cc/150?img=15',
        rating: 4
    },
    {
        id: 8,
        content:
            'O maior benefício do TutorTime para nós foi a análise de dados. Agora conseguimos identificar padrões, entender melhor as necessidades dos alunos e otimizar a oferta de monitorias com base em evidências concretas.',
        author: 'Fernanda Lima',
        role: 'Analista Educacional',
        institution: 'Fundação Educacional',
        avatar: 'https://i.pravatar.cc/150?img=1',
        rating: 5
    }
];

type VideoModalProps = {
    videoId: string;
    onClose: () => void;
};

const VideoModal = ({ videoId, onClose }: VideoModalProps) => {
    return (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="relative max-w-4xl w-full">
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
                >
                    <X size={24} />
                </button>
                <div className="bg-dark rounded-xl overflow-hidden">
                    <div className="aspect-video bg-darkAlt flex items-center justify-center">
                        <p className="text-white">
                            Video player would be embedded here (ID: {videoId})
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

type Testimonial = {
    id: number;
    content: string;
    author: string;
    role: string;
    institution: string;
    avatar: string;
    rating: number;
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    return (
        <div className="bg-darkAlt rounded-xl p-8 h-full border border-gray-800 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
            <div className="flex justify-between items-start mb-6">
                <Quote size={32} className="text-white/40" />
                <div className="flex">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={16}
                            className={
                                i < testimonial.rating
                                    ? 'text-yellow-400 fill-yellow-400'
                                    : 'text-gray-600'
                            }
                        />
                    ))}
                </div>
            </div>

            <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>

            <div className="flex items-center mt-auto">
                <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-primary"
                    onError={e => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = createPlaceholder(
                            150,
                            150,
                            testimonial.author.substring(0, 2)
                        );
                    }}
                />
                <div>
                    <h4 className="font-bold text-white">
                        {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-white">
                        {testimonial.institution}
                    </p>
                </div>
            </div>
        </div>
    );
};

const TestimonialsPage = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <div>
            <div className="bg-dark py-20 relative overflow-hidden">
                {/* Background effect */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Histórias de{' '}
                            <span className="text-white">Sucesso</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Veja como instituições de ensino têm transformado a
                            experiência de monitorias e aumentado a participação
                            dos alunos com o TutorTime.
                        </p>
                    </div>
                </div>
            </div>

            {/* Video Testimonials */}
            <section className="py-20 bg-darkAlt">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">
                        Depoimentos em <span className="text-white">Vídeo</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {videoTestimonials.map(video => (
                            <div
                                key={video.id}
                                className="bg-dark rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                            >
                                <div className="relative">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full aspect-video object-cover"
                                        onError={e => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src =
                                                createPlaceholder(
                                                    600,
                                                    400,
                                                    'Vídeo Indisponível'
                                                );
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-dark/60 flex items-center justify-center">
                                        <button
                                            onClick={() =>
                                                setSelectedVideo(video.videoId)
                                            }
                                            className="w-16 h-16 bg-primary hover:bg-secondary text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                                            aria-label="Reproduzir vídeo"
                                        >
                                            <Play
                                                size={30}
                                                className="ml-1 text-white"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        {video.title}
                                    </h3>
                                    <p className="text-primary">
                                        {video.institution}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Written Testimonials */}
            <section className="py-20 bg-dark">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">
                        O que os <span className="text-white">clientes</span>{' '}
                        dizem
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {testimonials.map(testimonial => (
                            <TestimonialCard
                                key={testimonial.id}
                                testimonial={testimonial}
                            />
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="p-8 bg-darkAlt rounded-xl border border-gray-800 text-center">
                            <h3 className="text-4xl font-bold text-white mb-2">
                                +500
                            </h3>
                            <p className="text-gray-300">
                                Instituições satisfeitas
                            </p>
                        </div>

                        <div className="p-8 bg-darkAlt rounded-xl border border-gray-800 text-center">
                            <h3 className="text-4xl font-bold text-white mb-2">
                                97%
                            </h3>
                            <p className="text-gray-300">Taxa de renovação</p>
                        </div>

                        <div className="p-8 bg-darkAlt rounded-xl border border-gray-800 text-center">
                            <h3 className="text-4xl font-bold text-white mb-2">
                                4.9/5
                            </h3>
                            <p className="text-gray-300">Avaliação média</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-20 bg-darkAlt">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">
                        Casos de <span className="text-white">Sucesso</span>
                    </h2>

                    <div className="max-w-4xl mx-auto bg-dark rounded-xl overflow-hidden border border-gray-800">
                        <div className="p-8 md:p-12">
                            <div className="flex flex-col md:flex-row">
                                <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                                    <img
                                        src="/TutorTimeMainLogo.png"
                                        alt="Instituto Federal"
                                        className="w-24 h-24 object-contain"
                                        onError={e => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src =
                                                createPlaceholder(
                                                    200,
                                                    200,
                                                    'Logo Indisponível'
                                                );
                                        }}
                                    />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        Instituto Federal de São Paulo
                                    </h3>
                                    <p className="text-white font-medium mb-4">
                                        Aumento de 65% na frequência de
                                        monitorias em 6 meses
                                    </p>

                                    <p className="text-gray-300 mb-4">
                                        O Instituto Federal de São Paulo (IFSP)
                                        enfrentava desafios significativos na
                                        organização e comunicação das monitorias
                                        para seus mais de 5.000 alunos. A falta
                                        de um sistema centralizado resultava em
                                        baixa participação e desperdício de
                                        recursos.
                                    </p>

                                    <h4 className="text-white font-bold mt-6 mb-2">
                                        Desafios:
                                    </h4>
                                    <ul className="text-gray-300 mb-6 space-y-2">
                                        <li className="flex items-start">
                                            <span className="text-white mr-2">
                                                •
                                            </span>
                                            <span>
                                                Comunicação fragmentada sobre
                                                horários e locais
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-2">
                                                •
                                            </span>
                                            <span>
                                                Baixa adesão dos alunos (apenas
                                                20% de ocupação)
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-2">
                                                •
                                            </span>
                                            <span>
                                                Dificuldade para controlar
                                                presença e efetividade
                                            </span>
                                        </li>
                                    </ul>

                                    <h4 className="text-white font-bold mb-2">
                                        Resultados com TutorTime:
                                    </h4>
                                    <ul className="text-gray-300 mb-6 space-y-2">
                                        <li className="flex items-start">
                                            <span className="text-white mr-2">
                                                •
                                            </span>
                                            <span>
                                                Aumento de 65% na frequência às
                                                monitorias
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-2">
                                                •
                                            </span>
                                            <span>
                                                Redução de 30% na reprovação nas
                                                disciplinas com monitoria
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-2">
                                                •
                                            </span>
                                            <span>
                                                Economia de 20 horas semanais em
                                                tarefas administrativas
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-2">
                                                •
                                            </span>
                                            <span>
                                                Satisfação de 92% entre alunos e
                                                professores
                                            </span>
                                        </li>
                                    </ul>

                                    <blockquote className="border-l-4 border-white pl-4 italic text-gray-400 mb-6">
                                        "O TutorTime transformou completamente a
                                        forma como gerenciamos nossas
                                        monitorias. A solução foi implementada
                                        rapidamente e os resultados foram
                                        imediatos."
                                        <footer className="text-white not-italic mt-2">
                                            — Paulo Mendes, Diretor de Ensino,
                                            IFSP
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CallToAction />

            {/* Video Modal */}
            {selectedVideo && (
                <VideoModal
                    videoId={selectedVideo}
                    onClose={() => setSelectedVideo(null)}
                />
            )}
        </div>
    );
};

export default TestimonialsPage;

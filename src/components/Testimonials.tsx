import { Star, Quote } from 'lucide-react';
import { createPlaceholder } from '../utils/placeholdersUtils';

interface TestimonialType {
    id: number;
    content: string;
    author: string;
    role: string;
    institution: string;
    avatar: string;
    rating: number;
}

interface TestimonialCardProps {
    testimonial: TestimonialType;
}

const testimonials = [
    {
        id: 1,
        content:
            'O TutorTime transformou completamente nossa gestão de aulas de reforço. A interface intuitiva facilita o agendamento e os alunos adoram a clareza com que podem visualizar todas as opções. Notamos um aumento de 60% na frequência desde que implementamos o sistema.',
        author: 'PESSOA 1',
        role: 'Coordenadora Pedagógica',
        institution: 'ESCOLA 1',
        avatar: 'https://i.pravatar.cc/150?img=32',
        rating: 5
    },
    {
        id: 2,
        content:
            'Como tutor, o TutorTime simplificou minha rotina. Consigo gerenciar horários, acompanhar a frequência dos alunos e me comunicar efetivamente com a coordenação. É uma ferramenta completa que otimizou nosso tempo e aumentou o engajamento dos estudantes.',
        author: 'PESSOA 2',
        role: 'Professor de Matemática',
        institution: 'ESCOLA 2',
        avatar: 'https://i.pravatar.cc/150?img=11',
        rating: 5
    },
    {
        id: 3,
        content:
            'Implementamos o TutorTime há 6 meses e os resultados são impressionantes. O número de faltas diminuiu drasticamente e os alunos relatam que estão conseguindo acompanhar melhor as disciplinas graças à facilidade de acesso às monitorias.',
        author: 'PESSOA 3',
        role: 'Diretora Acadêmica',
        institution: 'INSTITUTO 1',
        avatar: 'https://i.pravatar.cc/150?img=29',
        rating: 4
    },
    {
        id: 4,
        content:
            'Como aluna, o TutorTime mudou minha experiência com monitorias. Antes era confuso encontrar os horários disponíveis, agora consigo ver tudo no aplicativo e recebo lembretes sobre as aulas. Isso me ajudou muito a melhorar minhas notas!',
        author: 'PESSOA 4',
        role: 'Estudante',
        institution: 'INSTITUTO 2',
        avatar: 'https://i.pravatar.cc/150?img=5',
        rating: 5
    }
];

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
    return (
        <div className="bg-darkAlt rounded-xl p-8 transition-all duration-300 border border-gray-800 opacity-90 hover:scale-105 hover:opacity-100 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
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

            <div className="flex items-center">
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

const Testimonials = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-[#0c0c1d] to-[#0a0a1a] relative overflow-hidden">
            {/* Background effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-b from-indigo-600/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        O que os <span className="text-primary">clientes</span>{' '}
                        dizem
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Veja como o TutorTime tem ajudado instituições de ensino
                        a melhorar a organização de monitorias e aumentar a
                        frequência dos alunos.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.slice(0, 2).map(testimonial => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                        />
                    ))}
                </div>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.slice(2, 4).map(testimonial => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

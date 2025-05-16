import { CheckCircle, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPlaceholder } from '../utils/placeholdersUtils';

interface ImageModalProps {
    imageUrl: string;
    altText: string;
    onClose: () => void;
}

interface Screenshot {
    id: number;
    thumb: string;
    full: string;
    alt: string;
    title: string;
}

const ImageModal = ({ imageUrl, altText, onClose }: ImageModalProps) => {
    return (
        <div className="fixed inset-0 bg-[#0a0a1a]/90 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="relative max-w-4xl w-full bg-[#131339] rounded-xl overflow-hidden">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white bg-[#0a0a1a]/60 p-2 rounded-full hover:bg-[#0a0a1a] transition-all"
                >
                    <X size={24} />
                </button>
                <img
                    src={imageUrl}
                    alt={altText}
                    className="w-full h-auto"
                    onError={e => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = createPlaceholder(
                            1200,
                            800,
                            'Screenshot Indisponível'
                        );
                    }}
                />
            </div>
        </div>
    );
};

const ProductDemo = () => {
    const [selectedImage, setSelectedImage] = useState<Screenshot | null>(null);

    const screenshots: Screenshot[] = [
        {
            id: 1,
            thumb: createPlaceholder(400, 225, 'Dashboard'),
            full: createPlaceholder(1200, 800, 'Dashboard TutorTime'),
            alt: 'Dashboard da plataforma TutorTime',
            title: 'Dashboard principal'
        },
        {
            id: 2,
            thumb: createPlaceholder(400, 225, 'Agendamento'),
            full: createPlaceholder(1200, 800, 'Sistema de Agendamento'),
            alt: 'Sistema de agendamento de monitorias',
            title: 'Agendamento de monitorias'
        },
        {
            id: 3,
            thumb: createPlaceholder(400, 225, 'Análise'),
            full: createPlaceholder(1200, 800, 'Análise de Dados'),
            alt: 'Análise de dados e relatórios',
            title: 'Relatórios e estatísticas'
        }
    ];

    const features = [
        'Dashboard intuitivo e personalizável',
        'Sistema de agendamento simplificado',
        'Notificações automáticas para alunos',
        'Controle de presença digital',
        'Relatórios detalhados de participação',
        'Integração com sistemas acadêmicos',
        'Aplicativo móvel para alunos',
        'Suporte técnico especializado'
    ];

    const plans = [
        {
            name: 'Básico',
            price: 'R$ 499',
            period: '/mês',
            description: 'Ideal para pequenas instituições de ensino',
            features: [
                'Até 200 alunos',
                'Dashboard básico',
                'Sistema de agendamento',
                'Controle de presença',
                'Relatórios mensais',
                'Suporte por email'
            ],
            highlight: false,
            cta: 'Conhecer plano'
        },
        {
            name: 'Profissional',
            price: 'R$ 999',
            period: '/mês',
            description: 'Perfeito para instituições de médio porte',
            features: [
                'Até 1000 alunos',
                'Todas as funcionalidades do plano Básico',
                'API para integração com sistemas',
                'Aplicativo personalizado',
                'Relatórios avançados',
                'Suporte prioritário'
            ],
            highlight: true,
            cta: 'Mais popular'
        },
        {
            name: 'Empresarial',
            price: 'Consulte',
            period: '',
            description: 'Solução completa para grandes redes de ensino',
            features: [
                'Alunos ilimitados',
                'Todas as funcionalidades do plano Profissional',
                'Customizações específicas',
                'Onboarding completo',
                'Gerente de conta dedicado',
                'Suporte 24/7'
            ],
            highlight: false,
            cta: 'Fale conosco'
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-[#131339] to-[#0c0c1d]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Conheça o{' '}
                        <span className="text-indigo-400">TutorTime</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Uma plataforma completa para organização de monitorias e
                        aulas de reforço, desenvolvida para aumentar a
                        participação dos alunos.
                    </p>
                </div>

                {/* Screenshots */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                        Veja a plataforma em ação
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {screenshots.map(screenshot => (
                            <div
                                key={screenshot.id}
                                className="bg-darkAlt rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                            >
                                <div className="relative">
                                    <img
                                        src={screenshot.thumb}
                                        alt={screenshot.alt}
                                        className="w-full h-auto cursor-pointer"
                                        onClick={() =>
                                            setSelectedImage(screenshot)
                                        }
                                        onError={e => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src =
                                                createPlaceholder(
                                                    400,
                                                    225,
                                                    'Screenshot Indisponível'
                                                );
                                        }}
                                    />
                                    <div
                                        className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                                        onClick={() =>
                                            setSelectedImage(screenshot)
                                        }
                                    >
                                        <div className="bg-black/70 px-4 py-2 rounded-full text-white text-sm">
                                            Ver detalhes
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-medium text-white">
                                        {screenshot.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    {selectedImage && (
                        <ImageModal
                            imageUrl={selectedImage.full}
                            altText={selectedImage.alt}
                            onClose={() => setSelectedImage(null)}
                        />
                    )}
                </div>

                {/* Features */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                        Funcionalidades Principais
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-3 p-4 bg-darkAlt rounded-lg border border-gray-800"
                            >
                                <CheckCircle
                                    size={20}
                                    className="text-white flex-shrink-0 mt-0.5"
                                />
                                <span className="text-gray-300">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pricing */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                        Planos e Preços
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`
                  rounded-xl overflow-hidden transition-all duration-300
                  ${
                      plan.highlight
                          ? 'border-2 border-primary shadow-xl shadow-primary/10 relative'
                          : 'border border-gray-800 hover:border-gray-700'
                  }
                `}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium">
                                        Recomendado
                                    </div>
                                )}

                                <div
                                    className={`p-8 ${
                                        plan.highlight
                                            ? 'bg-darkAlt'
                                            : 'bg-dark'
                                    }`}
                                >
                                    <h4 className="text-xl font-bold text-white mb-2">
                                        {plan.name}
                                    </h4>
                                    <p className="text-gray-400 mb-6 text-sm h-12">
                                        {plan.description}
                                    </p>

                                    <div className="mb-6">
                                        <span className="text-3xl font-bold text-white">
                                            {plan.price}
                                        </span>
                                        <span className="text-gray-400">
                                            {plan.period}
                                        </span>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start space-x-3"
                                            >
                                                <CheckCircle
                                                    size={18}
                                                    className="text-white flex-shrink-0 mt-0.5"
                                                />
                                                <span className="text-gray-300 text-sm">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        to="/contact"
                                        className={`
                      w-full py-3 rounded-lg font-medium transition duration-300 flex items-center justify-center
                      ${
                          plan.highlight
                              ? 'bg-primary hover:bg-secondary text-white'
                              : 'bg-darkAlt hover:bg-gray-800 text-white border border-gray-700'
                      }
                    `}
                                    >
                                        {plan.cta}
                                        <ArrowRight
                                            size={16}
                                            className="ml-2 text-white"
                                        />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-gray-400 mt-8">
                        Todas as assinaturas incluem implementação e treinamento
                        inicial.
                        <br />
                        Para soluções personalizadas, entre em contato com nossa
                        equipe comercial.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProductDemo;

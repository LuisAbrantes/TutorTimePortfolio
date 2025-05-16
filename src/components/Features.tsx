import {
    CalendarDays,
    Users,
    BarChart,
    Bell,
    Clock,
    Settings
} from 'lucide-react';
import type { ReactNode } from 'react';

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
    return (
        <div className="p-6 bg-darkAlt rounded-xl border border-gray-800 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
            <div className="p-3 bg-primary/20 inline-flex rounded-lg mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
};

const Features = () => {
    const features = [
        {
            icon: <CalendarDays size={24} className="text-white" />,
            title: 'Agendamento Intuitivo',
            description:
                'Interface simples para gerenciar horários de aulas de reforço e monitorias.'
        },
        {
            icon: <Users size={24} className="text-white" />,
            title: 'Acesso Facilitado',
            description:
                'Plataforma centralizada para alunos visualizarem todas as monitorias disponíveis.'
        },
        {
            icon: <BarChart size={24} className="text-white" />,
            title: 'Análise de Dados',
            description:
                'Visualize estatísticas de frequência e desempenho dos alunos em tempo real.'
        },
        {
            icon: <Bell size={24} className="text-white" />,
            title: 'Lembretes Automáticos',
            description:
                'Notificações para alunos sobre horários de aulas e alterações de cronograma.'
        },
        {
            icon: <Clock size={24} className="text-white" />,
            title: 'Controle de Presença',
            description:
                'Sistema integrado para registro e monitoramento de frequência dos alunos.'
        },
        {
            icon: <Settings size={24} className="text-white" />,
            title: 'Personalização',
            description:
                'Adaptável às necessidades específicas de cada instituição de ensino.'
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-[#0c0c1d] to-[#0a0a1a]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Funcionalidades{' '}
                        <span className="text-indigo-400">Principais</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        O TutorTime oferece ferramentas poderosas para organizar
                        monitorias e reforços, facilitando o acesso dos alunos e
                        aumentando a participação.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

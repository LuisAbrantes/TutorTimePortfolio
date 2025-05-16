import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemType {
    question: string;
    answer: string;
}

interface FaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    toggleFaq: () => void;
}

const faqData: FaqItemType[] = [
    {
        question: 'O que é o TutorTime e como ele funciona?',
        answer: 'O TutorTime é uma plataforma que ajuda instituições de ensino a organizar aulas de reforço e monitorias. Ele centraliza o agendamento, notifica alunos sobre horários disponíveis e permite o controle de frequência, facilitando o acesso dos estudantes às aulas de reforço e aumentando a participação.'
    },
    {
        question:
            'Quais são os benefícios do TutorTime para minha instituição?',
        answer: 'Os principais benefícios incluem: aumento da frequência de alunos nas monitorias, melhor organização das aulas de reforço, redução de faltas e abandonos, análise de dados em tempo real, comunicação eficiente entre alunos e tutores, e interface intuitiva que facilita o acesso às informações.'
    },
    {
        question:
            'O TutorTime se integra com outros sistemas de gestão escolar?',
        answer: 'Sim, o TutorTime foi desenvolvido para se integrar com os principais sistemas de gestão escolar do mercado. Nossa API permite a sincronização de dados entre plataformas, facilitando a implementação e reduzindo a duplicação de informações.'
    },
    {
        question:
            'Quanto tempo leva para implementar o TutorTime em minha instituição?',
        answer: 'O tempo de implementação varia de acordo com o tamanho da instituição e a complexidade da integração necessária. Em média, o processo completo leva de 2 a 4 semanas, incluindo configuração, treinamento da equipe e período de teste.'
    },
    {
        question: 'O TutorTime oferece suporte técnico contínuo?',
        answer: 'Sim, oferecemos suporte técnico contínuo para todas as instituições clientes. Nossa equipe está disponível para resolver problemas, implementar melhorias e fornecer orientações sobre o uso da plataforma, garantindo que você aproveite ao máximo todos os recursos disponíveis.'
    },
    {
        question:
            'É possível personalizar o TutorTime de acordo com as necessidades da minha instituição?',
        answer: 'Absolutamente. O TutorTime foi projetado para ser flexível e adaptável às necessidades específicas de cada instituição. Oferecemos opções de personalização para ajustar a plataforma ao seu fluxo de trabalho, identidade visual e requisitos pedagógicos específicos.'
    }
];

const FaqItem = ({ question, answer, isOpen, toggleFaq }: FaqItemProps) => {
    return (
        <div className="border-b border-gray-800 py-5">
            <button
                className="flex justify-between items-center w-full text-left"
                onClick={toggleFaq}
            >
                <h3 className="text-lg font-medium text-white">{question}</h3>
                {isOpen ? (
                    <ChevronUp
                        className="text-primary flex-shrink-0"
                        size={20}
                    />
                ) : (
                    <ChevronDown
                        className="text-gray-400 flex-shrink-0"
                        size={20}
                    />
                )}
            </button>

            {isOpen && (
                <div className="mt-3 text-gray-400 animate-fade-in">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

const FaqSection = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gradient-to-b from-[#0a0a1a] to-[#0c0c1d]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Perguntas{' '}
                        <span className="text-indigo-400">Frequentes</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Encontre respostas para as dúvidas mais comuns sobre o
                        TutorTime e como ele pode ajudar sua instituição.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-darkAlt rounded-xl p-8 border border-gray-800">
                    {faqData.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openFaqIndex === index}
                            toggleFaq={() => toggleFaq(index)}
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-400 mb-4">
                        Não encontrou a resposta que procurava?
                    </p>
                    <a
                        href="/contact"
                        className="text-primary hover:text-secondary underline transition duration-300"
                    >
                        Entre em contato com nossa equipe
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;

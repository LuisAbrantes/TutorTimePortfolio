import FaqSection from '../components/FaqSection';
import CallToAction from '../components/CallToAction';
import { Search, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqCategories = [
    {
        id: 'general',
        title: 'Geral',
        questions: [
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
                    'O TutorTime é adequado para qualquer tipo de instituição de ensino?',
                answer: 'Sim, o TutorTime foi projetado para atender todos os tipos de instituições de ensino, desde escolas de ensino fundamental e médio até universidades e centros de formação profissional. A plataforma é flexível e pode ser adaptada às necessidades específicas de cada contexto educacional.'
            }
        ]
    },
    {
        id: 'tech',
        title: 'Tecnologia',
        questions: [
            {
                question:
                    'O TutorTime se integra com outros sistemas de gestão escolar?',
                answer: 'Sim, o TutorTime foi desenvolvido para se integrar com os principais sistemas de gestão escolar do mercado. Nossa API permite a sincronização de dados entre plataformas, facilitando a implementação e reduzindo a duplicação de informações.'
            },
            {
                question:
                    'Quais são os requisitos técnicos para utilizar o TutorTime?',
                answer: 'O TutorTime é uma solução baseada em nuvem acessível por navegador web ou aplicativo móvel. Não há necessidade de infraestrutura especializada. Os únicos requisitos são: acesso à internet, navegadores atualizados (Chrome, Firefox, Safari ou Edge) e, para o aplicativo móvel, smartphones Android 7.0+ ou iOS 12+.'
            },
            {
                question:
                    'Como é feita a segurança e proteção de dados na plataforma?',
                answer: 'Levamos a segurança muito a sério. O TutorTime utiliza criptografia de ponta a ponta, autenticação de dois fatores, e nossos servidores seguem as melhores práticas de segurança da informação. Estamos em conformidade com a LGPD e outras regulamentações de proteção de dados aplicáveis.'
            }
        ]
    },
    {
        id: 'implementation',
        title: 'Implementação',
        questions: [
            {
                question:
                    'Quanto tempo leva para implementar o TutorTime em minha instituição?',
                answer: 'O tempo de implementação varia de acordo com o tamanho da instituição e a complexidade da integração necessária. Em média, o processo completo leva de 2 a 4 semanas, incluindo configuração, treinamento da equipe e período de teste.'
            },
            {
                question:
                    'Como é feito o treinamento para os usuários da plataforma?',
                answer: 'Oferecemos um programa completo de treinamento que inclui webinars ao vivo, tutoriais em vídeo, documentação detalhada e sessões personalizadas para administradores e equipe técnica. Também disponibilizamos materiais específicos para alunos e professores, facilitando a adoção da plataforma.'
            },
            {
                question:
                    'É possível personalizar o TutorTime de acordo com as necessidades da minha instituição?',
                answer: 'Absolutamente. O TutorTime foi projetado para ser flexível e adaptável às necessidades específicas de cada instituição. Oferecemos opções de personalização para ajustar a plataforma ao seu fluxo de trabalho, identidade visual e requisitos pedagógicos específicos.'
            }
        ]
    },
    {
        id: 'support',
        title: 'Suporte',
        questions: [
            {
                question: 'O TutorTime oferece suporte técnico contínuo?',
                answer: 'Sim, oferecemos suporte técnico contínuo para todas as instituições clientes. Nossa equipe está disponível para resolver problemas, implementar melhorias e fornecer orientações sobre o uso da plataforma, garantindo que você aproveite ao máximo todos os recursos disponíveis.'
            },
            {
                question:
                    'Quais são os horários de disponibilidade do suporte técnico?',
                answer: 'O suporte técnico varia de acordo com o plano: Básico (9h às 18h, segunda a sexta), Profissional (8h às 20h, segunda a sábado), e Empresarial (atendimento 24/7). Todos os planos oferecem suporte via plataforma e e-mail.'
            },
            {
                question:
                    'Como posso reportar problemas ou sugerir melhorias para a plataforma?',
                answer: 'Valorizamos o feedback dos nossos clientes! Você pode reportar problemas ou sugerir melhorias diretamente pelo painel do administrador, pelo email suporte@tutortime.com.br ou através do seu gerente de conta designado.'
            }
        ]
    },
    {
        id: 'pricing',
        title: 'Preços e Contratação',
        questions: [
            {
                question: 'Quais são os planos disponíveis e seus preços?',
                answer: 'Oferecemos três planos principais: Básico (R$ 499/mês para até 200 alunos), Profissional (R$ 999/mês para até 1000 alunos) e Empresarial (preço personalizado para grandes instituições). Todos os planos incluem as funcionalidades essenciais, com diferenças em volume de uso, integrações e nível de suporte.'
            },
            {
                question: 'Existe algum período de teste gratuito?',
                answer: 'Sim, oferecemos um período de teste gratuito de 30 dias para que você possa experimentar a plataforma e verificar como ela se adapta às necessidades da sua instituição. Durante este período, você terá acesso a todas as funcionalidades do plano Profissional e suporte completo da nossa equipe.'
            },
            {
                question: 'Qual é a duração mínima do contrato?',
                answer: 'Nossos contratos padrão são anuais, mas também oferecemos opções semestrais com um pequeno ajuste de valor. Para instituições públicas ou com necessidades específicas, podemos adaptar os termos contratuais conforme necessário.'
            }
        ]
    }
];

const FAQPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('general');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        // If search is active, don't filter by category
        if (e.target.value) {
            setActiveCategory('');
        } else {
            setActiveCategory('general');
        }
    };

    // Filter questions based on search or active category
    const filteredQuestions = searchTerm
        ? faqCategories.flatMap(category =>
              category.questions.filter(
                  q =>
                      q.question
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
              )
          )
        : faqCategories.find(c => c.id === activeCategory)?.questions || [];

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
                            Perguntas{' '}
                            <span className="text-white">Frequentes</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Encontre respostas para as principais dúvidas sobre
                            o TutorTime e como ele pode beneficiar sua
                            instituição de ensino.
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-2xl mx-auto mb-8">
                            <input
                                type="text"
                                placeholder="Buscar pergunta ou palavra-chave..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="w-full px-6 py-4 bg-darkAlt border border-gray-700 rounded-full text-white focus:outline-none focus:border-primary pr-12"
                            />
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
                                <Search size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-20 bg-darkAlt">
                <div className="container mx-auto px-6">
                    {/* Category Tabs */}
                    {!searchTerm && (
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {faqCategories.map(category => (
                                <button
                                    key={category.id}
                                    onClick={() =>
                                        setActiveCategory(category.id)
                                    }
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        activeCategory === category.id
                                            ? 'bg-primary text-white'
                                            : 'bg-dark text-gray-300 hover:bg-gray-800'
                                    }`}
                                >
                                    {category.title}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* FAQ List */}
                    <div className="max-w-3xl mx-auto">
                        {searchTerm && filteredQuestions.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-300 mb-6">
                                    Nenhum resultado encontrado para "
                                    {searchTerm}".
                                </p>
                                <p className="text-gray-400">
                                    Tente outra busca ou entre em contato com
                                    nossa equipe para obter ajuda.
                                </p>
                            </div>
                        ) : (
                            <div className="bg-dark rounded-xl p-8 border border-gray-800">
                                <h2 className="text-2xl font-bold text-white mb-8">
                                    {searchTerm
                                        ? `Resultados para "${searchTerm}"`
                                        : faqCategories.find(
                                              c => c.id === activeCategory
                                          )?.title || 'Perguntas Frequentes'}
                                </h2>

                                <div className="space-y-6">
                                    {filteredQuestions.map((faq, index) => (
                                        <div
                                            key={index}
                                            className="border-b border-gray-800 pb-6 last:border-0"
                                        >
                                            <h3 className="text-lg font-medium text-white mb-3">
                                                {faq.question}
                                            </h3>
                                            <p className="text-gray-400">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Additional Help */}
                        <div className="bg-dark rounded-xl p-8 border border-gray-800 mt-12">
                            <h3 className="text-xl font-bold text-white mb-6">
                                Não encontrou o que procurava?
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-darkAlt rounded-lg border border-gray-700">
                                    <h4 className="font-medium text-white mb-3">
                                        Entre em contato
                                    </h4>
                                    <p className="text-gray-400 mb-4">
                                        Nossa equipe está pronta para responder
                                        suas dúvidas específicas.
                                    </p>
                                    <Link
                                        to="/contact"
                                        className="text-primary hover:text-secondary flex items-center transition-colors"
                                    >
                                        Fale conosco
                                        <ArrowRight
                                            size={16}
                                            className="ml-1 text-white"
                                        />
                                    </Link>
                                </div>

                                <div className="p-6 bg-darkAlt rounded-lg border border-gray-700">
                                    <h4 className="font-medium text-white mb-3">
                                        Agende uma demonstração
                                    </h4>
                                    <p className="text-gray-400 mb-4">
                                        Veja o TutorTime em ação com um
                                        especialista guiando você.
                                    </p>
                                    <Link
                                        to="/contact"
                                        className="text-primary hover:text-secondary flex items-center transition-colors"
                                    >
                                        Agendar demo
                                        <ArrowRight
                                            size={16}
                                            className="ml-1 text-white"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FaqSection />
            <CallToAction />
        </div>
    );
};

export default FAQPage;

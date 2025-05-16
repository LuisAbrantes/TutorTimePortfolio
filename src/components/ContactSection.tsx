import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        institution: '',
        phone: '',
        message: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would normally send the form data to your backend
        console.log('Form submitted:', formData);
        setFormSubmitted(true);

        // Reset form after submission
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                institution: '',
                phone: '',
                message: ''
            });
            setFormSubmitted(false);
        }, 5000);
    };

    return (
        <section className="py-20 bg-gradient-to-b from-[#0c0c1d] to-[#0a0a1a] relative overflow-hidden">
            {/* Background effect */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-600/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-600/5 rounded-full filter blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Entre em <span className="text-primary">Contato</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Estamos prontos para ajudar sua instituição a
                        transformar a gestão de monitorias e aumentar a
                        participação dos alunos. Fale conosco!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-darkAlt p-8 rounded-xl border border-gray-800">
                        {formSubmitted ? (
                            <div className="text-center py-12">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                                    <Send size={28} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Mensagem Enviada!
                                </h3>
                                <p className="text-gray-400">
                                    Agradecemos seu contato. Nossa equipe
                                    responderá em breve.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label
                                        htmlFor="name"
                                        className="block text-gray-400 mb-2"
                                    >
                                        Nome completo
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-dark border border-gray-700 text-white focus:outline-none focus:border-primary"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-gray-400 mb-2"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-dark border border-gray-700 text-white focus:outline-none focus:border-primary"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-gray-400 mb-2"
                                        >
                                            Telefone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-dark border border-gray-700 text-white focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="institution"
                                        className="block text-gray-400 mb-2"
                                    >
                                        Nome da Instituição
                                    </label>
                                    <input
                                        type="text"
                                        id="institution"
                                        name="institution"
                                        value={formData.institution}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-dark border border-gray-700 text-white focus:outline-none focus:border-primary"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="message"
                                        className="block text-gray-400 mb-2"
                                    >
                                        Mensagem
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg bg-dark border border-gray-700 text-white focus:outline-none focus:border-primary resize-none"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-primary hover:bg-secondary text-white rounded-lg font-medium transition duration-300 flex items-center justify-center"
                                >
                                    Enviar Mensagem
                                    <Send size={18} className="ml-2" />
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Information */}
                    <div>
                        <div className="bg-darkAlt p-8 rounded-xl border border-gray-800 mb-8">
                            <h3 className="text-xl font-bold text-white mb-6">
                                Informações de Contato
                            </h3>

                            <ul className="space-y-6">
                                <li className="flex">
                                    <div className="flex-shrink-0 p-3 bg-primary/20 rounded-lg mr-4">
                                        <MapPin
                                            size={24}
                                            className="text-white"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white mb-1">
                                            Endereço
                                        </h4>
                                        <p className="text-gray-400">
                                            Av. Paulista, 1000, Bela Vista
                                            <br />
                                            São Paulo, SP 01310-100
                                        </p>
                                    </div>
                                </li>

                                <li className="flex">
                                    <div className="flex-shrink-0 p-3 bg-primary/20 rounded-lg mr-4">
                                        <Phone
                                            size={24}
                                            className="text-white"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white mb-1">
                                            Telefone
                                        </h4>
                                        <p className="text-gray-400">
                                            (11) 9999-9999
                                            <br />
                                            (11) 8888-8888
                                        </p>
                                    </div>
                                </li>

                                <li className="flex">
                                    <div className="flex-shrink-0 p-3 bg-primary/20 rounded-lg mr-4">
                                        <Mail
                                            size={24}
                                            className="text-white"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white mb-1">
                                            Email
                                        </h4>
                                        <p className="text-gray-400">
                                            contato@tutortime.com.br
                                            <br />
                                            suporte@tutortime.com.br
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-darkAlt p-8 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-6">
                                Horário de Atendimento
                            </h3>

                            <ul className="space-y-3">
                                <li className="flex justify-between">
                                    <span className="text-gray-400">
                                        Segunda - Sexta:
                                    </span>
                                    <span className="text-white font-medium">
                                        9:00 - 18:00
                                    </span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-gray-400">
                                        Sábado:
                                    </span>
                                    <span className="text-white font-medium">
                                        10:00 - 14:00
                                    </span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-gray-400">
                                        Domingo e Feriados:
                                    </span>
                                    <span className="text-white font-medium">
                                        Fechado
                                    </span>
                                </li>
                            </ul>

                            <div className="mt-8 pt-6 border-t border-gray-800">
                                <h4 className="font-medium text-white mb-3">
                                    Suporte técnico
                                </h4>
                                <p className="text-gray-400">
                                    Clientes ativos têm acesso ao nosso suporte
                                    técnico 24/7 através da plataforma ou pelo
                                    email dedicado.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

import ContactSection from '../components/ContactSection';

const ContactPage = () => {
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
                            Entre em <span className="text-white">Contato</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Estamos à disposição para ajudar sua instituição a
                            transformar a experiência de monitorias e aulas de
                            reforço.
                        </p>
                    </div>
                </div>
            </div>

            <ContactSection />
        </div>
    );
};

export default ContactPage;

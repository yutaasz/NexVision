import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast, ToastContainer } from "react-toastify";
import Lottie from "lottie-react";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import TierCard from "../components/TierCard";
import TestimonialCard from "../components/TestimonialCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Importação das Imagens Geradas por IA
import HdProIndoor from "../assets/hd_pro_indoor.png";
import LumixOutdoor from "../assets/lumix_outdoor.png";
import ApexCreative from "../assets/apex_creative.png";

// Importação da animação Lottie
import lottietech from "../assets/lottie_tech.json";

// Importação das Folhas de Estilo Modulares
import "react-toastify/dist/ReactToastify.css";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/products.css";
import "../styles/pricing.css";
import "../styles/testimonials.css";
import "../styles/quote.css";
import "../styles/footer.css";

export default function Home() {
    const [selectedTier, setSelectedTier] = useState("seraphim");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    // Lógica real de submissão do formulário
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!captchaToken) {
            toast.error("Por favor, complete o desafio reCAPTCHA antes de enviar.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    message: `Nome: ${name}\nLinha de Painéis Desejada: ${selectedTier}\n\nDetalhes do Projeto:\n${message}`,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Ocorreu um erro ao enviar.");
            }

            toast.success("Solicitação enviada! Nossa equipe entrará em contato em breve. ✅");
            // Limpa o formulário e reseta o reCAPTCHA
            setName("");
            setEmail("");
            setMessage("");
            setCaptchaToken(null);
            recaptchaRef.current?.reset();
        } catch (err: any) {
            toast.error(err.message || "Falha ao enviar a solicitação. Tente novamente mais tarde.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* 1. Cabeçalho (Navbar) */}
            <Header />

            {/* 2. Hero Section */}
            <section className="hero-section" id="vision">
                <div className="hero-layout">
                    <div className="hero-content">
                        <span className="hero-subtitle">Tecnologia Visual de Ponta</span>
                        <h1 className="hero-title">IMPACTO VISUAL EXTRAORDINÁRIO PARA SEU NEGÓCIO</h1>
                        <p className="hero-desc">
                            Eleve a experiência do seu público. Painéis de LED de alta performance com brilho extremo, contraste incrível e durabilidade incomparável para eventos, igrejas e varejo.
                        </p>
                        <div className="hero-buttons">
                            <a href="#lotes">
                                <Button text="Ver Nossos Painéis" />
                            </a>
                            <a href="#plans">
                                <Button text="Soluções Corporativas" secondary />
                            </a>
                        </div>
                    </div>
                    <div className="hero-lottie" aria-hidden="true">
                        <Lottie animationData={lottietech} loop autoplay />
                    </div>
                </div>
                <a href="#lotes" className="hero-arrow" aria-label="Rolar para baixo">
                    <svg viewBox="0 0 24 24">
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                    </svg>
                </a>
            </section>

            {/* 3. Portfólio de Soluções (Portfolio) */}
            <main className="container py-xl" id="firmament">
                <section id="lotes">
                    <div className="section-title-wrapper">
                        <h2 className="section-title">Soluções em Painéis de LED</h2>
                        <span className="section-subtitle">Encontre o modelo de tela de LED ideal para o seu projeto</span>
                    </div>

                    <div className="portfolio-grid">
                        <ProductCard
                            image={HdProIndoor}
                            title="Série HD-Pro (Indoor)"
                            desc="Painéis de altíssima definição com pixel pitch ultra reduzido. Perfeito para estúdios de gravação, igrejas, auditórios e salas de controle."
                            price="R$ 4.500/m²"
                        />
                        <ProductCard
                            image={LumixOutdoor}
                            title="Série Lumix (Outdoor)"
                            desc="Painéis de alto brilho para publicidade externa e fachadas. Proteção IP65 contra intempéries e visualização perfeita mesmo sob luz solar direta."
                            price="R$ 6.200/m²"
                        />
                        <ProductCard
                            image={ApexCreative}
                            title="Série Apex Creative"
                            desc="Formatos especiais, painéis de LED curvos, cilíndricos e telas transparentes de alta tecnologia. Crie experiências visuais imersivas sob medida."
                            price="R$ 8.900/m²"
                        />
                    </div>
                </section>


            </main>

            {/* 5. Planos de Aquisição */}
            <section className="tiers-section" id="plans">
                <div className="container">
                    <div className="section-title-wrapper">
                        <h2 className="section-title">Modelos de Aquisição</h2>
                        <span className="section-subtitle">Escolha o plano de contratação ideal para a demanda da sua empresa.</span>
                    </div>

                    <div className="tiers-grid">
                        <TierCard
                            name="Essencial"
                            tagline="Para Pequenos Negócios"
                            price="290"
                            suffix="/ m² (Locação)"
                            features={[
                                "Painéis de LED de 3.9mm",
                                "Suporte técnico em horário comercial",
                                "Garantia de 1 ano contra defeitos"
                            ]}
                            buttonText="Solicitar Cotação"
                        />
                        <TierCard
                            name="Pro"
                            tagline="Para Grandes Eventos"
                            price="450"
                            suffix="/ m² (Locação)"
                            features={[
                                "Painéis de LED de 2.6mm Premium",
                                "Calibração de color avançada inclusa",
                                "Suporte técnico emergencial 24/7",
                                "Garantia estendida de 3 anos"
                            ]}
                            buttonText="Garantir Solução Pro"
                            featured
                        />
                        <TierCard
                            name="Corporate Custom"
                            tagline="Sob Medida"
                            price="Consultar"
                            suffix="/ sob demanda"
                            features={[
                                "Formatos curvos, esféricos ou flexíveis",
                                "Integração com software de automação",
                                "Consultoria de engenharia audiovisual"
                            ]}
                            buttonText="Falar com Engenheiro"
                        />
                    </div>
                </div>
            </section>

            {/* 6. Depoimentos (Casos de Sucesso) */}
            <section className="voices-section">
                <div className="container">
                    <div className="section-title-wrapper">
                        <h2 className="section-title">Histórias de Sucesso</h2>
                        <span className="section-subtitle">O que dizem os clientes que transformaram seus espaços com a NexVision</span>
                    </div>

                    <div className="voices-grid">
                        <TestimonialCard
                            text="&ldquo;A instalação dos painéis de LED HD-Pro na nossa igreja transformou completamente a experiência do público nos cultos. O brilho e a nitidez são impressionantes.&rdquo;"
                            author="Pastor Ricardo Menezes"
                            role="Diretor Geral da Catedral da Esperança"
                            avatar="RM"
                        />
                        <TestimonialCard
                            text="&ldquo;Os painéis da série Lumix Outdoor resistiram a fortes chuvas e ventos sem perder qualidade visual. O retorno sobre o investimento publicitário foi excelente.&rdquo;"
                            author="Fernanda Costa"
                            role="Diretora de Marketing da Target Mídia"
                            avatar="FC"
                        />
                    </div>
                </div>
            </section>

            {/* 7. Formulário de Cotação (Solicite um Orçamento) */}
            <section className="inquiry-section" id="inquiry">
                <div className="container">
                    <div className="section-title-wrapper">
                        <h2 className="section-title">Solicite um Orçamento</h2>
                        <span className="section-subtitle">Nossa equipe técnica elaborará uma proposta sob medida para sua necessidade visual.</span>
                    </div>

                    <div className="inquiry-card">
                        <form className="inquiry-form" onSubmit={handleSubmit}>
                            <div className="form-row-2">
                                <div className="form-group">
                                    <label htmlFor="soul-name" className="form-label">Nome Completo</label>
                                    <input
                                        type="text"
                                        id="soul-name"
                                        className="form-input"
                                        placeholder="Ex: João da Silva"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">E-mail Corporativo</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-input"
                                        placeholder="Ex: joao@empresa.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="tier-select" className="form-label">Linha de Painéis Desejada</label>
                                <select
                                    id="tier-select"
                                    className="form-select"
                                    value={selectedTier}
                                    onChange={(e) => setSelectedTier(e.target.value)}
                                >
                                    <option value="neophyte">Série HD-Pro (Indoor)</option>
                                    <option value="seraphim">Série Lumix (Outdoor)</option>
                                    <option value="deity">Série Apex Creative (Custom)</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="requests" className="form-label">Detalhes do seu Projeto (Opcional)</label>
                                <textarea
                                    id="requests"
                                    className="form-textarea"
                                    placeholder="Descreva a finalidade do painel, dimensões estimadas, local de instalação ou outras necessidades específicas..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>

                            <div className="form-recaptcha-container">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY ?? ""}
                                    onChange={(token) => setCaptchaToken(token)}
                                    onExpired={() => setCaptchaToken(null)}
                                    theme="dark"
                                />
                            </div>

                            <div className="form-submit-container">
                                <Button 
                                    type="submit"
                                    text={loading ? "Enviando..." : "Enviar Solicitação"} 
                                    disabled={loading || !captchaToken}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* 8. Rodapé (Footer) */}
            <Footer />

            {/* Toast Notifications */}
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
}
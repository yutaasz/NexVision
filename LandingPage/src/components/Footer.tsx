export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="container footer-container">
                <span className="footer-logo">NEX<span>VISION</span></span>

                <ul className="footer-links">
                    <li><a href="#vision">Termos de Serviço</a></li>
                    <li><a href="#firmament">Políticas de Privacidade</a></li>
                    <li><a href="#plans">Nossos Modelos</a></li>
                </ul>

                <p className="footer-slogan">
                    NEXVISION. TECNOLOGIA VISUAL QUE IMPACTA.
                </p>

                <div className="footer-socials">
                    <a href="#" className="footer-icon-link" aria-label="Instagram">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    </a>
                    <a href="#" className="footer-icon-link" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24">
                            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                        </svg>
                    </a>
                    <a href="#" className="footer-icon-link" aria-label="Facebook">
                        <svg viewBox="0 0 24 24">
                            <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                        </svg>
                    </a>
                </div>

                <span className="footer-copyright">
                    &copy; 2026 NexVision. Todos os direitos reservados.
                </span>
            </div>
        </footer>
    );
}

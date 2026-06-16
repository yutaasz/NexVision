import { useState, useEffect } from "react";
import Button from "./Button";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [activeSection, setActiveSection] = useState("vision");

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace("#", "");
            if (hash) {
                setActiveSection(hash);
            } else {
                setActiveSection("vision");
            }
        };

        window.addEventListener("hashchange", handleHashChange);
        // Captura o hash inicial ao carregar a página
        handleHashChange();

        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const handleLinkClick = (id: string) => {
        setActiveSection(id);
        setShowMobileMenu(false);
    };

    return (
        <header className="header-nav">
            <div className="container header-container flex items-center justify-between">
                <a href="#" className="logo-text" onClick={() => handleLinkClick("vision")}>NEX<span>VISION</span></a>

                <div className="desktop-only">
                    <ul className="nav-links flex gap-2">
                        <li>
                            <a 
                                href="#firmament" 
                                className={activeSection === "firmament" ? "active" : ""}
                                onClick={() => handleLinkClick("firmament")}
                            >
                                Produtos
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#plans" 
                                className={activeSection === "plans" ? "active" : ""}
                                onClick={() => handleLinkClick("plans")}
                            >
                                Modelos e Preços
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#vision" 
                                className={activeSection === "vision" ? "active" : ""}
                                onClick={() => handleLinkClick("vision")}
                            >
                                Nossa Visão
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#inquiry" 
                                className={activeSection === "inquiry" ? "active" : ""}
                                onClick={() => handleLinkClick("inquiry")}
                            >
                                Orçamento
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="desktop-only">
                    <a href="#inquiry" onClick={() => handleLinkClick("inquiry")}>
                        <Button text="SOLICITAR ORÇAMENTO" />
                    </a>
                </div>

                <div className="mobile-menu">
                    {showMobileMenu ? (
                        <div className="mobile-menu-content">
                            <div className="container flex mobile-nav-container">
                                <span onClick={() => setShowMobileMenu(false)} className="btn-wrapper close-btn">
                                    <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                </span>
                                <ul className="flex flex-column gap-2">
                                    <li>
                                        <a 
                                            href="#firmament" 
                                            className={activeSection === "firmament" ? "active" : ""}
                                            onClick={() => handleLinkClick("firmament")}
                                        >
                                            Produtos
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="#plans" 
                                            className={activeSection === "plans" ? "active" : ""}
                                            onClick={() => handleLinkClick("plans")}
                                        >
                                            Modelos e Preços
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="#vision" 
                                            className={activeSection === "vision" ? "active" : ""}
                                            onClick={() => handleLinkClick("vision")}
                                        >
                                            Nossa Visão
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="#inquiry" 
                                            className={activeSection === "inquiry" ? "active" : ""}
                                            onClick={() => handleLinkClick("inquiry")}
                                        >
                                            Orçamento
                                        </a>
                                    </li>
                                    <li className="mt-lg">
                                        <a href="#inquiry" onClick={() => handleLinkClick("inquiry")}>
                                            <Button text="SOLICITAR ORÇAMENTO" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <span onClick={() => setShowMobileMenu(true)} className="btn-wrapper">
                            <img src={Menu} alt="ícone menu" width={24} height={24} />
                        </span>
                    )}
                </div>
            </div>
        </header>
    );
}

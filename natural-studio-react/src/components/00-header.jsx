import {useTranslate} from "../assets/js/dictionary"

export default function Header() {
    
    const { t } = useTranslate();
    const whatsappLink = process.env.REACT_APP_WHATSAPP_LINK || "https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.";

  return (
    <header className="container">
        <nav>
            <h1>NATURAL <span className="icon-color">※</span> STUDIO</h1>
            <ul>
                <li><a href="#01-section-main" className="navDetail">Home</a></li>
                <li><a href="#04-section-service" className="navDetail">Serviços</a></li>
                <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="button p-bold">{t("mainButton")}</a></li>
            </ul>
        </nav>
    </header>
    ); 
}
import {useTranslate} from "../assets/js/dictionary"

export default function Header() {
    
    const { t } = useTranslate();
    const whatsappLink = process.env.REACT_APP_WHATSAPP_LINK || "https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.";

  return (
    <main className="background" id="01-section-main">
        <section className="container section">

            <div className="section-text">
                <h1 className="icon-color">※ <span>{t("mainTitle")}</span></h1>
                <p>{t("mainDescription")}</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="button p-bold">{t("mainButton")}</a>
            </div>

            <img src="/img/IMG01.png" alt=""/>
                    
        </section>
    </main>
    ); 
}
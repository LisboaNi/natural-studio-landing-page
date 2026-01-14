import {useTranslate} from "../assets/js/dictionary"

export default function Header() {
    
    const { t } = useTranslate();
    const mapsLink = process.env.REACT_APP_LINK_MAP || "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14620.651891075391!2d-46.52589089999999!3d-23.6343339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1768258437732!5m2!1spt-BR!2sbr";

  return (
    <section className="background-contrast-botton">
        <div className="container section">

            <img src="/img/IMG03.png" alt=""/>

            <div className="section-text">
                <h1>{t("infoTitle")}</h1>
                <p>{t("infoDescription")}</p>

                <iframe
                    src={mapsLink}
                    width="420"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de localização do estúdio"
                    >
                </iframe>
            </div>

        </div>
    </section>
    ); 
}
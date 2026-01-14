import {useTranslate} from "../assets/js/dictionary"

export default function Header() {
    
    const { t } = useTranslate();
    const buttonLink = process.env.REACT_APP_BUTTON || "#";

  return (
    <article>
        <div className="container">

            <div className="section-text">
                <h1 className="icon-color">※ <span>{t("articleTitle")}</span></h1>
                <p>{t("articleDescription")}</p>
                <h1 className="icon-color">{t("articleSubtitle")}</h1>
                <p>{t("articleText")}</p>
                <a href={buttonLink} className="button p-bold">{t("articleButton")}</a>
            </div>

        </div>
    </article>
    ); 
}
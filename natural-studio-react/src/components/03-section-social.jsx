 import {useTranslate} from "../assets/js/dictionary"
 
 export default function Header() {

    const { t } = useTranslate();
    const link01= process.env.REACT_APP_LINK_01 || "https://www.instagram.com/";
    const link02= process.env.REACT_APP_LINK_02 || "https://www.facebook.com/";
    const link03= process.env.REACT_APP_LINK_03 || "https://www.youtube.com/";

  return (
    <section className="background-contrast">
          <div className="container section">

            <img src="/img/IMG02.png" alt=""/>

            <div className="section-text">
                <h1 className="icon-color">⨠ <span data-text="socialTitle">{t("socialTitle")}</span></h1>
                <p>{t("socialDescription")}</p>

                <ul className="icon">
                    <li>
                        <a href={link01} target="_blank" rel="noopener noreferrer">
                            <img src="/img/icon/01_icon.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href={link02} target="_blank" rel="noopener noreferrer">
                            <img src="/img/icon/02_icon.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href={link03} target="_blank" rel="noopener noreferrer">
                            <img src="/img/icon/03_icon.svg" alt="" />
                        </a>
                    </li>
                </ul>
                
            </div>

        </div>
     </section>
     ); 
 }
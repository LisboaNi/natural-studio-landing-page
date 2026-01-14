import {useTranslate} from "../assets/js/dictionary"

export default function MidiaSection() {
  const { t } = useTranslate();
  const totalCards = 6;

  const images = Array.from({ length: totalCards }, (_, index) => {
    const number01 = String(6 - index).padStart(2, "0");
    const number02 = String(index + 1).padStart(2, "0");

    return [
      `/img/card/${number01}_card.jpg`,
      `/img/card/${number02}_card.jpg`,
    ];
  }).flat();

  return (
    <section className="container">
      <h1 className="icon-color">
        ⨠ <span>{t("midiaTitle")}</span>
      </h1>

      <ul className="figure-midia">
        {images.map((src, index) => (
          <li key={index} className="midia-item">
            <img src={src} alt={`Mídia ${index + 1}`} />
          </li>
        ))}
      </ul>
    </section>
  );
}

import {useTranslate} from "../assets/js/dictionary"

export default function CardsSection() {
    const { t } = useTranslate();
    const totalCards = 6;

    const cards = Array.from({ length: totalCards }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");

    return {
      id: number,
      image: `/img/profe/${number}_p.jpg`,
      titleKey: `profeName${number}`,
    };
  });

  return (
    <section className="background">
      <div className="container">
      <h1 className="section-text">{t("profeTitle")}</h1>
        <ul className="card-frame">
            {cards.map((card) => (
            <li key={card.id}>
                <img src={card.image} alt={`Professionals ${card.id}`} />
                <span className="span-card card-title p-bold">
                {t(card.titleKey)}
                </span>
            </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
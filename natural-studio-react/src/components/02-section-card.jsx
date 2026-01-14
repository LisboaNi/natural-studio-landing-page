import {useTranslate} from "../assets/js/dictionary"

export default function CardsSection() {
    const { t } = useTranslate();
    const totalCards = 3;

    const cards = Array.from({ length: totalCards }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");

  return {
      id: number,
      image: `/img/card/${number}_card.jpg`,
      titleKey: `sectionTag${number}`,
      listKeys: [`list01Card${number}`, `list02Card${number}`],
    };
  });

  return (
    <section className="container">
        <ul className="card">
        {cards.map((card) => (
            <li key={card.id} className="background">
            <img src={card.image} alt={`Card ${card.id}`} />

            <span className="card-title p-bold">
                {t(card.titleKey)}
            </span>

            <ul className="card-text">
                {card.listKeys.map((text, index) => (
                <li key={index}>{t(text)}</li>
                ))}
            </ul>
            </li>
        ))}
        </ul>
    </section>
  );
}

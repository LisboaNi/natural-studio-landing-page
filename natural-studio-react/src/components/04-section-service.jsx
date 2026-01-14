import {useTranslate} from "../assets/js/dictionary"

export default function CardsSection() {
    const { t } = useTranslate();
    const totalCards = 6;

    const cards = Array.from({ length: totalCards }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    const imgNumber = String(6 - index).padStart(2, '0')

    return {
      id: number,
      image: `/img/card/${imgNumber}_card.jpg`,
      titleKey: `serviceTag${number}`,
      listKeys: [
        `titleList${number}`,
        `card01List${number}`,
        `card02List${number}`,
      ],
    };
  });

  return (
    <section id="04-section-service" className="container">
      <h1 className="section-text">{t("serviceTitle")}</h1>
      <div className="card-service-wrapper">
        <ul className="card-service">
            {cards.map((card) => (
            <li key={card.id} className="background">
                <img src={card.image} alt={`Serviço ${card.id}`} />

                <span className="card-title p-bold">
                {t(card.titleKey)}
                </span>

                <ul className="card-text">
                {card.listKeys.map((key) => (
                    <li key={key}>{t(key)}</li>
                ))}
                </ul>
            </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
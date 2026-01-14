import { useState } from "react";
import {useTranslate} from "../assets/js/dictionary";

export default function FAQSection() {
  const { t } = useTranslate();
  const totalQuestions = 7;

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = Array.from({ length: totalQuestions }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");

    return {
      id: number,
      questionKey: `faqQuestion${number}`,
      answerKey: `faqAnswer${number}`,
    };
  });

  function toggleAccordion(index) {
    setActiveIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="container">
      <h1 className="icon-color">⨠ <span>{t("faqTitle")}</span></h1>

      <ul id="section-faq" className="accordion-list">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;

          return (
            <li
              key={faq.id}
              className={`accordion ${isActive ? "active" : ""}`}
            >
              <button
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isActive}
              >
                <p>
                  <strong>{t(faq.questionKey)}</strong>
                </p>
              </button>

              {isActive && (
                <div className="accordion-content">
                  <p>{t(faq.answerKey)}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
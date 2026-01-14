import './assets/css/style.min.css';
import { SpeedInsights } from "@vercel/speed-insights/react";

import Header from "./components/00-header.jsx";
import Main from "./components/01-section-main.jsx";
import CardsSection from "./components/02-section-card.jsx";
import SocialSection from "./components/03-section-social.jsx";
import ServiceSection from "./components/04-section-service.jsx";
import FigureMidia from "./components/05-figure-midia.jsx";
import InfoSection from "./components/06-section-info.jsx";
import ArticleCurso from "./components/07-article-curso.jsx";
import ProfeSection from "./components/08-section-professionals.jsx";
import FAQSection from "./components/09-faq.jsx";
import Footer from "./components/10-footer.jsx";

function App() {
  return (
    <>
      <SpeedInsights />
      <Header />
      <Main />
      <CardsSection />
      <SocialSection />
      <ServiceSection />
      <FigureMidia />
      <InfoSection />
      <ArticleCurso />
      <ProfeSection />
      <FAQSection />
      <Footer />
    </>
  );
}

export default App;

export default function Header() {
    
    const whatsappLink = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.";

  return (
    <footer className="background-detail">
        <div className="container section-text footer">

            <ul className="footer-nav">
                <li><a href="#01-section-main">※ HOME ※</a></li>
                <li><a href="#04-section-service">※ SERVIÇOS ※</a></li>
                <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer">※ CONTATO ※</a></li>
            </ul>

            <p>Copyright © 2026 Reichert Lisboa. Todos os direitos reservados.</p>
        </div>
    </footer>
    ); 
}
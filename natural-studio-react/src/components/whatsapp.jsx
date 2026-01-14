export default function Header() {
    
    const whatsappLink = process.env.REACT_APP_WHATSAPP_LINK || "https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.";

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <img src="/img/icon/whatsapp.svg" alt="WhatsApp Icon"/>
    </a>
    ); 
}

const lang = 'pt'
const dictionary = {pt: {}}

Object.assign(dictionary.pt, {
    mainTitle: "Especialista em cachos, transição capilar e cor.",
    mainDescription:"Técnicas personalizadas para valorizar a sua textura natural. Cuidado  e respeito à sua história capilar em cada atendimento.",
    mainButton: "AGENDAR",
})

Object.assign(dictionary.pt, {
    sectionTag01: "※ MECHAS ※",
    list01Card01: "+ Teste de Mechas",
    list02Card01: "+ Tratamento | Finalização",

    sectionTag02: "※ CORTE ※",
    list01Card02: "+ Secagem",
    list02Card02: "+ Finalização",

    sectionTag03: "※ TRATAMENTO ※",
    list01Card03: "+ Hidratação | Tratamento",
    list02Card03: "+ Finalização",
})

Object.assign(dictionary.pt, {
    socialTitle: "Agende Seu Horário",
    socialDescription: "Entre em contato para agendar seu horário ou tirar dúvidas sobre nossos serviços."
})

Object.assign(dictionary.pt, {

    serviceTitle: "Nossos Serviços",

    serviceTag01: "APARTIR DE R$480",
    titleList01: "※ RUIVO ※",
    card01List01: "+ Secagem",
    card02List01: "+ Tratamento | Finalização",

    serviceTag02: "APARTIR DE R$200",
    titleList02: "※ CORTE ※",
    card01List02: "+ Secagem",
    card02List02: "+ Finalização",

    serviceTag03: "APARTIR DE R$250",
    titleList03: "※ PRANCHA FRIA ※",
    card01List03: "+ Tratamento",
    card02List03: "+ Secagem",

    serviceTag04: "APARTIR DE R$780",
    titleList04: "※ MECHAS ※",
    card01List04: "+ Teste de Mechas",
    card02List04: "+ Tratamento | Finalização",

    serviceTag05: "APARTIR DE R$180",
    titleList05: "※ OZÔNIO TERAPIA ※",
    card01List05: "+ Tratamento",
    card02List05: "+ Secagem",

    serviceTag06: "APARTIR DE R$230",
    titleList06: "※ ANT POROSIDADE ※",
    card01List06: "+ Tratamento",
    card02List06: "+ Secagem",
})

Object.assign(dictionary.pt, {
    infoTitle: "Estamos localizados em São Paulo",
    infoDescription:"Av. Paulista, 1009 - Bela Vista, São Paulo - SP, 01310-100 | (11) 90000-0000",
})

Object.assign(dictionary.pt, {
    profeTitle: "Especialistas | Nossa Equipe",
    profeName01: "※ Ana Silva",
    profeName02: "※ Beatriz Souza",
    profeName03: "※ Carla Mendes",
    profeName04: "※ Daniela Rocha",
    profeName05: "※ Elisa Ferreira",
    profeName06: "※ Fernando Lima",
})

Object.assign(dictionary.pt, {
    articleTitle: "Guia para iniciantes em cuidados com cabelos com curvaturas:",
    articleDescription:"Descubra técnicas essenciais e dicas de cuidados diários para cuidar de cabelos cacheados, ondulados e crespos. Perfeito para iniciantes a profissionais em cuidados com os cabelos.",
    articleButton: "COMPRAR AGORA",
    articleSubtitle: "SAIBA MAIS",
    articleText: "Desvende os segredos do tratamento profissional para cabelos cacheados, ondulados e crespos. POR APENAS R$ 49,99 em até 2x.",
})

Object.assign(dictionary.pt, {
    midiaTitle: "Veja Nossos Trabalhos",
})

Object.assign(dictionary.pt, {
    faqTitle: "Dúvidas Frequentes",
    faqQuestion01: "Quais são os horários de atendimento?",
    faqAnswer01: "Atendemos de segunda a sexta, das 9h às 18h.",
    faqQuestion02: "Como faço para agendar um horário?",
    faqAnswer02: "Você pode agendar um horário entrando em contato conosco pelo whatsapp.",
    faqQuestion03: "Quais métodos de pagamento são aceitos?",
    faqAnswer03: "Aceitamos cartões de crédito, débito e pagamentos via Pix.",
    faqQuestion04: "Vocês oferecem consultas personalizadas?",
    faqAnswer04: "Sim, oferecemos consultas para entender suas necessidades capilares antes do atendimento.",
    faqQuestion05: "Quais produtos vocês utilizam?",
    faqAnswer05: "Trabalhamos com marcas renomadas que respeitam a saúde dos cabelos e do meio ambiente.",
    faqQuestion06: "Vocês têm políticas de cancelamento?",
    faqAnswer06: "Sim, pedimos que os cancelamentos sejam feitos com pelo menos 24 horas de antecedência.",
    faqQuestion07: "Vocês oferecem serviços para todos os tipos de cabelo?",
    faqAnswer07: "Sim, nossos serviços são personalizados para atender todos os tipos de cabelo e texturas."
})

function applyDictionary() {
  document.querySelectorAll('[data-text]').forEach(el => {
    const key = el.dataset.text
    el.textContent = dictionary[lang][key] ?? ''
  })
}
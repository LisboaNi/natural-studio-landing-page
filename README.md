# Natural Studio – Landing Page

Landing page desenvolvida para o **Natural Studio**, focada em apresentação de serviços, fortalecimento da marca e conversão de agendamentos. O projeto foi originalmente criado em HTML/CSS/JS puro e posteriormente **migrado para React**, mantendo o layout e evoluindo a arquitetura para algo mais escalável e profissional.

---

## 🚀 Tecnologias utilizadas

* **React (Create React App)**
* **JavaScript (ES6+)**
* **HTML5 & CSS3**
* **Vercel** (deploy)

---

## ✨ Funcionalidades

* Componentização completa da landing page
* Renderização dinâmica de seções (cards, serviços, FAQ, etc.)
* Sistema simples de tradução via `dictionary`
* Accordion interativo em React (sem manipulação direta do DOM)
* Links externos centralizados em variáveis de ambiente
* Preparado para deploy em produção

---

## Variáveis de ambiente

Este projeto utiliza variáveis de ambiente para URLs externas (WhatsApp, Maps, redes sociais, etc.).

Duplique o arquivo `.env.example` e altere para `.env`

---

## Como rodar o projeto localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start
```

A aplicação estará disponível em:

```
http://localhost:3000
```

---

## ☁️ Deploy

O projeto está configurado para deploy automático no **Vercel**, utilizando:

* Build Command: `npm run build`
* Output Directory: `build`
* Framework Preset: Create React App

---

## 🔀 Versionamento

* **main** → versão atual em React
* **old-html-version** → versão original em HTML/CSS/JS puro

Essa separação preserva o histórico do projeto e evidencia a migração tecnológica.

---

## 🎯 Objetivo do projeto

* Praticar migração de projetos legados para React
* Aplicar boas práticas de componentização
* Organizar um projeto real para portfólio
* Simular fluxo profissional com branches, PRs e deploy

---

## 🧠 Observações finais

Este projeto tem foco em **estrutura, clareza e manutenção**, não apenas no visual. Todo o código foi pensado para facilitar evolução futura, troca de conteúdo e adaptação para novos clientes.

---

Desenvolvido por **LisboaNi
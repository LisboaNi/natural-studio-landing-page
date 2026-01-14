function renderSectionProfessionals() {
  
    const totalCards = 6
    const list = document.getElementById('06-section-professionals')
    if (!list) return

    for (let i = 1; i <= totalCards; i++) {
        
        const number = String(i).padStart(2, '0')

        list.innerHTML += `
        <li>
            <img src="/src/img/profe/${number}_p.jpg" alt="">
            <span class="span-card card-title p-bold" data-text="profeName${number}"></span>
        </li>
        `
    }
}
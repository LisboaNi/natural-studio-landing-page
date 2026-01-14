function renderSectionMidia() {
  
    const totalCards = 6
    const list = document.getElementById('08-section-midia')
    if (!list) return

    for (let i = 1; i <= totalCards; i++) {
        
        const number01 = String(7 - i).padStart(2, '0')
        const number02 = String(i).padStart(2, '0')

        list.innerHTML += `
        <li class="midia-item">
            <img src="/src/img/card/${number01}_card.jpg" alt="">
        </li>
        <li class="midia-item">
            <img src="/src/img/card/${number02}_card.jpg" alt="">
        </li>
        `
    }
}
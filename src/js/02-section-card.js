function renderSectionCards() {
  
    const totalCards = 3
    const list = document.getElementById('02-section-card')
    if (!list) return

    for (let i = 1; i <= totalCards; i++) {
      
      const number = String(i).padStart(2, '0')

      list.innerHTML += `
        <li class="background">
          <img src="/src/img/card/${number}_card.jpg" alt="">
          <span class="card-title p-bold" data-text="sectionTag${number}"></span>
          <ul class="card-text">
            <li data-text="list01Card${number}"></li>
            <li data-text="list02Card${number}"></li>
          </ul>
        </li>
      `
    }
}
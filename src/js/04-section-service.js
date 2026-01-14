function renderSectionService() {
    
    const totalCards = 6
    const list = document.getElementById('04-section-service')
    if (!list) return

    for (let i = 1; i <= totalCards; i++) {
            
        const number = String(i).padStart(2, '0')
        const imgNumber = String(7 - i).padStart(2, '0')

        list.innerHTML += `
        <li class="background">
            <img src="/src/img/card/${imgNumber}_card.jpg" alt="">
            <span class="card-title p-bold" data-text="serviceTag${number}"></span>
            <ul class="card-text">
            <li data-text="titleList${number}"></li>
            <li data-text="card01List${number}"></li>
            <li data-text="card02List${number}"></li>
            </ul>
        </li>
        `
    }
}
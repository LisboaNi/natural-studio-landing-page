function bindAccordionEvents() {
  document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.accordion').forEach(item => {
        if (item !== button.parentElement) {
            item.classList.remove('active')
        }
        })

        button.parentElement.classList.toggle('active')
    })
    })
}

function renderSectionFAQ() {

  const totalCards = 6
  const list = document.getElementById('09-section-faq')
  if (!list) return

  list.innerHTML = ''

  for (let i = 1; i <= totalCards; i++) {

    const number = String(i).padStart(2, '0')

    list.innerHTML += `
      <li class="accordion">
        <button class="accordion-header">
          <p><strong data-text="faqQuestion${number}"></strong></p>
        </button>
        <div class="accordion-content">
          <p data-text="faqAnswer${number}"></p>
        </div>
      </li>
    `
  }

  bindAccordionEvents()
}
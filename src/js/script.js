importScripts()
function importScripts() {
  const scripts = [
    '/src/js/02-section-card.js',
    '/src/js/04-section-service.js',
    '/src/js/06-section-professionals.js',
    '/src/js/08-figure-midia.js',
    '/src/js/09-faq.js',
    '/src/js/dictionary.js',
    '/src/js/components.js',
  ]

  scripts.forEach(src => {
    const s = document.createElement('script')
    s.src = src
    s.defer = true
    document.body.appendChild(s)
  })
}
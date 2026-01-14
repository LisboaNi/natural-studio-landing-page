function loadComponent(id, path) {
  const container = document.getElementById(id)
  if (!container) return Promise.resolve()

  return fetch(path)
    .then(r => r.text())
    .then(html => {
      container.innerHTML = html
    })
}

Promise.all([
    loadComponent('00-header', './src/components/00-header.html'),
    loadComponent('01-section-main', './src/components/01-section-main.html'),
    loadComponent('03-section-social', './src/components/03-section-social.html'),
    loadComponent('05-section-info', './src/components/05-section-info.html'),
    loadComponent('07-article-curso', './src/components/07-article-curso.html'),
    loadComponent('10-footer', './src/components/10-footer.html'),
]).then(() => {
    renderSectionProfessionals()
    renderSectionService()
    renderSectionMidia()
    renderSectionCards()
    renderSectionFAQ()
    applyDictionary()
})
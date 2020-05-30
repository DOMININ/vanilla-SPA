import { default as getHomePage } from './pages/home.js'

const getContent = (hash) => {
  const pages = {
    home: getHomePage()
  }

  return pages[hash]
}

const setActiveLink = (hash) => {
  const pageLinks = document.querySelectorAll('[data-page]')
  pageLinks.forEach(link => {
    link.dataset.page === hash ? link.classList.add('active') :
      link.classList.remove('active')
  })
}

const createNavigation = () => {
  let { hash } = location
  if (!hash) {
    hash = "#home"
  }
  hash = hash.slice(1)

  setActiveLink(hash)

  let contentBlock = document.querySelector('#content')
  contentBlock.innerHTML = getContent(hash)
}

createNavigation()
window.addEventListener('hashchange', createNavigation)

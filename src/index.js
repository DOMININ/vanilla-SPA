import { default as createHomePage } from './pages/home.js'
import { default as createVkPage } from './pages/vkPage.js'
import { createVkListeners } from './pages/vkListeners.js';

const getContent = (hash) => {
  const pages = {
    home: createHomePage(),
    vkTest: createVkPage()
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
    hash = "#vkTest"
  }
  hash = hash.slice(1)

  setActiveLink(hash)

  let contentBlock = document.querySelector('#content')
  contentBlock.innerHTML = getContent(hash)
  createVkListeners()
}

createNavigation()
window.addEventListener('hashchange', createNavigation)

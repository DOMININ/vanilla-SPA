(() => {
  const cardButtonElement = document.querySelectorAll('[data-cardButton]')
  const cardFormElement = document.querySelectorAll('[data-cardForm]')
  const cardCloseFormElement = document.querySelectorAll('[data-close]')
  const cardButtonAddElement = document.querySelectorAll('[data-cardAdd]')
  const cardListElement = document.querySelectorAll('[data-cardList]')

  cardButtonElement.forEach((el, id) => {
    el.addEventListener('click', () => {
      el.style.display = 'none'
      cardFormElement[id].style.display = 'block'
      cardFormElement[id].querySelector('[data-area]').focus()
    })
  })

  cardCloseFormElement.forEach((el, id) => {
    el.addEventListener('click', () => {
      cardButtonElement[id].style.display = 'flex'
      cardFormElement[id].style.display = 'none'
    })
  })

  const addNewItem = id => {
    const textFromArea = cardFormElement[id].querySelector('[data-area]').value
    if (textFromArea.trim() !== '') {
      cardListElement[id].insertAdjacentHTML('beforeend',
        `<li class="card-item">${textFromArea}</li>`)
      cardFormElement[id].querySelector('[data-area]').value = ''
      cardButtonElement[id].style.display = 'flex'
      cardFormElement[id].style.display = 'none'
    } else {
      cardFormElement[id].querySelector('[data-area]').value = ''
    }
  }

  cardButtonAddElement.forEach((el, id) => {
    el.addEventListener('click', () => {
      addNewItem(id)
    })

    cardFormElement[id].querySelector('[data-area]').addEventListener('keydown',
      (e) => {
        if (e.key === "Enter") {
          addNewItem(id)
        }
      })
  })
})()
export function createVkListeners() {
  const cardButtonElement = document.querySelectorAll('[data-cardButton]')
  const cardFormElement = document.querySelectorAll('[data-cardForm]')
  const cardCloseFormElement = document.querySelectorAll('[data-close]')
  const cardButtonAddElement = document.querySelectorAll('[data-cardAdd]')
  const cardListElement = document.querySelectorAll('[data-cardList]')

  // Создание карточек
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
    el.addEventListener('click', () => addNewItem(id))

    cardFormElement[id].querySelector('[data-area]').addEventListener('keydown',
      e => e.key === 'Enter' && addNewItem(id))
  })

  // Создание колонок
  const containerElement = document.querySelector('[data-container]')
  const LAST_OPENED_COLUMN = 2
  let columnIndex = 0

  const newColumnForm = columnIndex => {
    return `
      <div data-column="1" class="column">
        <div data-columnForm="${columnIndex}" class="column-block-add">
          <input data-columnTitle="true" class="card-text" placeholder="Введите название колонки" />
          <div class="buttons-wrapper">
            <button data-addColumn="1" class="card-add">Добавить колонку</button>
            <svg data-columnClose="${columnIndex}" class="card-close" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 6.71875L14.2188 0L15 0.78125L8.28125 7.5L15 14.2188L14.2188 15L7.5 8.28125L0.78125 15L0 14.2188L6.71875 7.5L0 0.78125L0.78125 0L7.5 6.71875Z" fill="#6B808C"/>
            </svg>
          </div>
        </div>
        <button data-newColumn="${columnIndex}" class="card-button">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1412 6.64122H8.35878V0.858779C8.35878 0.400763 7.95802 0 7.5 0C7.04198 0 6.64122 0.400763 6.64122 0.858779V6.64122H0.858779C0.400763 6.64122 0 7.04198 0 7.5C0 7.95801 0.400763 8.35878 0.858779 8.35878H6.64122V14.1412C6.64122 14.5992 7.04198 15 7.5 15C7.95802 15 8.35878 14.5992 8.35878 14.1412V8.35878H14.1412C14.5992 8.35878 15 7.95801 15 7.5C15 7.04198 14.5992 6.64122 14.1412 6.64122Z" fill="#6B808C"/>
          </svg>
          <span>Добавить еще одну колонку</span>
        </button>
      </div>
    `
  }

  const addNewColumn = (inputTitle, columnPosition) => {
    const columnHTML = `
      <h3 class="card-title">${inputTitle}</h3>
      <ul data-cardList="true" class="card-list"></ul>
      <div class="card-block-add" data-cardForm="1">
        <textarea data-area="true" class="card-text" placeholder="Введите название карточки"></textarea>
        <div class="buttons-wrapper">
          <button data-cardAdd="true" class="card-add">Добавить карточку</button>
          <svg class="card-close" data-close="true" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 6.71875L14.2188 0L15 0.78125L8.28125 7.5L15 14.2188L14.2188 15L7.5 8.28125L0.78125 15L0 14.2188L6.71875 7.5L0 0.78125L0.78125 0L7.5 6.71875Z" fill="#6B808C"/>
          </svg>
        </div>
      </div>
      <button data-cardButton="true" class="card-button">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1412 6.64122H8.35878V0.858779C8.35878 0.400763 7.95802 0 7.5 0C7.04198 0 6.64122 0.400763 6.64122 0.858779V6.64122H0.858779C0.400763 6.64122 0 7.04198 0 7.5C0 7.95801 0.400763 8.35878 0.858779 8.35878H6.64122V14.1412C6.64122 14.5992 7.04198 15 7.5 15C7.95802 15 8.35878 14.5992 8.35878 14.1412V8.35878H14.1412C14.5992 8.35878 15 7.95801 15 7.5C15 7.04198 14.5992 6.64122 14.1412 6.64122Z" fill="#6B808C"/>
        </svg>Добавить еще одну карточку
      </button>
    `

    document.querySelectorAll('[data-column]')[columnPosition]
      .insertAdjacentHTML('beforeend', columnHTML)
  }

  const createNewColumn = () => {
    columnIndex++
    containerElement.insertAdjacentHTML('beforeend', newColumnForm(columnIndex))
  }

  const deleteNewColumn = () => {
    columnIndex--
    containerElement.removeChild(containerElement.lastElementChild)
  }

  containerElement.addEventListener('click', e => {
    const target = e.target
    const columnButtonElement = document.querySelectorAll('[data-newColumn]')
    const columnFormElement = document.querySelectorAll('[data-columnForm]')

    if (target.dataset.newcolumn || target.parentNode.dataset.newcolumn) {
      columnButtonElement[target.dataset.newcolumn || target.parentNode.dataset.newcolumn].style.display = 'none'
      columnFormElement[target.dataset.newcolumn || target.parentNode.dataset.newcolumn].style.display = 'block'
      createNewColumn()
    }

    if (target.dataset.columnclose) {
      columnButtonElement[columnButtonElement.length-LAST_OPENED_COLUMN].style.display = 'block'
      columnFormElement[columnFormElement.length-LAST_OPENED_COLUMN].style.display = 'none'
      deleteNewColumn()
    }

    if (target.dataset.addcolumn) {
      const inputTitle = document.querySelector('[data-columnTitle]').value
      const columnPosition = target.dataset.addcolumn
      columnFormElement[columnPosition].style.display = 'none'
      addNewColumn(inputTitle, columnPosition)
    }
  })
}
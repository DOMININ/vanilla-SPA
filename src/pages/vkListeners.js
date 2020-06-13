export function createVkListeners() {
  // Создание колонок
  const containerElement = document.querySelector('[data-container]')
  let columnCount = 0

  const createColumnForm = () => {
    const columnFormHTML = `
      <div class="column-block-add visible">
        <input data-inputTitle="${columnCount}" class="card-text" placeholder="Введите название колонки" />
        <div class="buttons-wrapper">
          <button data-addColumn="${columnCount}" class="card-add">Добавить колонку</button>
          <svg class="card-close" data-closeForm="${columnCount}" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path data-closeForm="${columnCount}" fill-rule="evenodd" clip-rule="evenodd" d="M7.5 6.71875L14.2188 0L15 0.78125L8.28125 7.5L15 14.2188L14.2188 15L7.5 8.28125L0.78125 15L0 14.2188L6.71875 7.5L0 0.78125L0.78125 0L7.5 6.71875Z" fill="#6B808C"/>
          </svg>
        </div>
      </div>
    `

    const buttonForForm = document.querySelector('[data-newColumn]')

    const columnForm = document.createElement('div')
    columnForm.setAttribute('data-column', `${columnCount}`)
    columnForm.setAttribute('class', 'column')
    columnForm.insertAdjacentHTML('afterbegin', columnFormHTML)

    document.querySelector('[data-container]')
      .insertBefore(columnForm, buttonForForm)

    const titles = document.querySelectorAll('[data-inputtitle]')
    titles.forEach(title => {
      if (+title.dataset.inputtitle === columnCount) title.focus()
    })

    columnCount++
  }

  const deleteColumnForm = target => {
    const columnClose = target.dataset.closeform
    const columns = document.querySelectorAll('[data-column]')

    columns.forEach(column => {
      if (column.dataset.column === columnClose) column.remove()
    })
  }

  const createColumn = target => {
    const columnPosition = target.dataset.addcolumn
    const titles = document.querySelectorAll('[data-inputtitle]')

    let columnTitle = 'Новая колонка'

    titles.forEach(title => {
      if (title.dataset.inputtitle === columnPosition) columnTitle = title.value
    })

    const columnHTML = `
      <div class="column">
        <h3 class="card-title">${columnTitle}</h3>
        <ul data-cardList="true" class="card-list"></ul>
        <div class="card-block-add">
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
      </div>
    `

    const columns = document.querySelectorAll('[data-column]')

    columns.forEach(column => {
      if (column.dataset.column === columnPosition) {
        column.insertAdjacentHTML('afterend', columnHTML)
        column.remove()
      }
    })
  }

  containerElement.addEventListener('click', e => {
    const target = e.target

    if (target.dataset.newcolumn) {
      createColumnForm()
    }

    if (target.dataset.closeform) {
      deleteColumnForm(target)
    }

    if (target.dataset.addcolumn) {
      createColumn(target)
    }
  })
}
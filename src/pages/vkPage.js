export default () => {
  return `
    <div data-container class="container">
      <div class="column">
        <h3 class="card-title">Планы на месяц</h3>
        <ul class="card-list">
          <li class="card-item">Пройти курс по React</li>
          <li class="card-item">Отметить день рождения</li>
          <li class="card-item">Записаться на курсы английского языка, чтобы уехать жить в Лондон</li>
          <li class="card-item">Сделать бекенд своего сайта на node.js</li>
          <li class="card-item">Собрать портфолио</li>
          <li class="card-item">Написать первую статью в блог</li>
          <li class="card-item">
            Записаться в мотошколу. Хотя немного страшновато, конечно. Друзья и родители против, но очень хочется. 
            Но кого я обманываю, уже 2 года решаюсь на этот шаг 😢 Еще и друзья будут хрустиком называть. В общем, 
            хотя бы подумать над этим.
          </li>
          <li class="card-item">Нет, я серьезный человек, иду в мотошколу. Записываюсь!</li>
        </ul>
        <div class="card-block-add">
          <textarea class="card-text" placeholder="Введите название карточки"></textarea>
          <div class="buttons-wrapper">
            <button class="card-add">Добавить карточку</button>
            <svg class="card-close"  width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 6.71875L14.2188 0L15 0.78125L8.28125 7.5L15 14.2188L14.2188 15L7.5 8.28125L0.78125 15L0 14.2188L6.71875 7.5L0 0.78125L0.78125 0L7.5 6.71875Z" fill="#6B808C"/>
            </svg>
          </div>
        </div>
        <button class="card-button">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1412 6.64122H8.35878V0.858779C8.35878 0.400763 7.95802 0 7.5 0C7.04198 0 6.64122 0.400763 6.64122 0.858779V6.64122H0.858779C0.400763 6.64122 0 7.04198 0 7.5C0 7.95801 0.400763 8.35878 0.858779 8.35878H6.64122V14.1412C6.64122 14.5992 7.04198 15 7.5 15C7.95802 15 8.35878 14.5992 8.35878 14.1412V8.35878H14.1412C14.5992 8.35878 15 7.95801 15 7.5C15 7.04198 14.5992 6.64122 14.1412 6.64122Z" fill="#6B808C"/>
          </svg>
          Добавить еще одну карточку
        </button>
      </div>
      <div class="column">
        <h3 class="card-title">Планы на день</h3>
        <ul class="card-list">
          <li class="card-item">Пройти курс по React</li>
          <li class="card-item">Отметить день рождения</li>
          <li class="card-item">Записаться на курсы английского языка, чтобы уехать жить в Лондон</li>
        </ul>
        <div class="card-block-add">
          <textarea class="card-text" placeholder="Введите название карточки"></textarea>
          <div class="buttons-wrapper">
            <button class="card-add">Добавить карточку</button>
            <svg class="card-close" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 6.71875L14.2188 0L15 0.78125L8.28125 7.5L15 14.2188L14.2188 15L7.5 8.28125L0.78125 15L0 14.2188L6.71875 7.5L0 0.78125L0.78125 0L7.5 6.71875Z" fill="#6B808C"/>
            </svg>
          </div>
        </div>
        <button class="card-button">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1412 6.64122H8.35878V0.858779C8.35878 0.400763 7.95802 0 7.5 0C7.04198 0 6.64122 0.400763 6.64122 0.858779V6.64122H0.858779C0.400763 6.64122 0 7.04198 0 7.5C0 7.95801 0.400763 8.35878 0.858779 8.35878H6.64122V14.1412C6.64122 14.5992 7.04198 15 7.5 15C7.95802 15 8.35878 14.5992 8.35878 14.1412V8.35878H14.1412C14.5992 8.35878 15 7.95801 15 7.5C15 7.04198 14.5992 6.64122 14.1412 6.64122Z" fill="#6B808C"/>
          </svg>Добавить еще одну карточку
        </button>
      </div>
      <button data-newColumn="true" class="card-button">
        <svg data-newColumn="true" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path data-newColumn="true" fill-rule="evenodd" clip-rule="evenodd" d="M14.1412 6.64122H8.35878V0.858779C8.35878 0.400763 7.95802 0 7.5 0C7.04198 0 6.64122 0.400763 6.64122 0.858779V6.64122H0.858779C0.400763 6.64122 0 7.04198 0 7.5C0 7.95801 0.400763 8.35878 0.858779 8.35878H6.64122V14.1412C6.64122 14.5992 7.04198 15 7.5 15C7.95802 15 8.35878 14.5992 8.35878 14.1412V8.35878H14.1412C14.5992 8.35878 15 7.95801 15 7.5C15 7.04198 14.5992 6.64122 14.1412 6.64122Z" fill="#6B808C"/>
        </svg>
        <span data-newColumn="true">Добавить еще одну колонку</span>
      </button>
    </div>
  `
}

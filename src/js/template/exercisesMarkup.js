function exerciseCreateMarkup(exercises) {
  return exercises
    .map(
      exercise => `<li class="exercise-item" data-id="${exercise.id}">
        <div class="exercise-header">
          <p class="exercise-header-badge">WORKOUT</p>
          <div class="exercise-header-rating">
            <p>${exercise.rating}</p>
            <svg
              class="exercise-rating-icon"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="./images/icons.svg#star"></use>
            </svg>
          </div>
          <button class="exercise-header-button" type="button">
            <p>Start</p>
            <svg
              class="exercise-btn-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <use href="./images/icons.svg#arrow-right"></use>
            </svg>
          </button>
        </div>
        <div class="exercise-title">
          <div class="exercise-title-icon-tumb" width="24" height="24">
            <svg
              class="exercise-title-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="./images/icons.svg#running-man"></use>
            </svg>
          </div>
          <h3 class="exercise-title-text">${exercise.name}</h3>
        </div>
        <ul class="exercise-footer">
          <li>
            <span class="exercise-footer-item-accent">Burned calories:</span>
            ${exercise.burnedCalories}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Body part:</span>
            ${exercise.bodyPart}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Target:</span>
            ${exercise.target}
          </li>
        </ul>
      </li>`
    )
    .join('');
}

export { exerciseCreateMarkup };

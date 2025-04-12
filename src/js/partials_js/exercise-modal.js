function renderExerciseModal({
  id,
  name,
  target,
  bodyPart,
  popularity,
  time,
  burnedCalories,
  rating,
  description,
  gifUrl,
  equipment,
}) {
  return `<div class="container">
    <div data-id=${id} class="exercise-modal-card">
      <button class="close-modal-btn">
        <svg class="close-modal-icon">
          <use href="./images/icons.svg#close"></use>
        </svg>
      </button>
      <div class="exercise-gif-wrapper">
        <img
          class="exercise-gif"
          src=${gifUrl}
          alt="alt text from backend here"
        />
      </div>
      <div class="exercise-modal-overview">
        <div>
          <h2 class="exercise-modal-title">${name}</h2>
          <div class="exercise-modal-rating-block">
            <p class="exercise-modal-rating">${rating}</p>
            <svg class="exercise-modal-rating-icon rated">
              <use href="./images/icons.svg#star"></use>
            </svg>
            <svg class="exercise-modal-rating-icon rated">
              <use href="./images/icons.svg#star"></use>
            </svg>
            <svg class="exercise-modal-rating-icon rated">
              <use href="./images/icons.svg#star"></use>
            </svg>
            <svg class="exercise-modal-rating-icon rated">
              <use href="./images/icons.svg#star"></use>
            </svg>
            <svg class="exercise-modal-rating-icon">
              <use href="./images/icons.svg#star"></use>
            </svg>
          </div>
        </div>
        <div class="exercise-modal-info-block">
          <div class="exercise-modal-info">
            <p class="exercise-modal-info-title">Target</p>
            <p class="exercise-modal-info-descr">${target}</p>
          </div>
          <div class="exercise-modal-info">
            <p class="exercise-modal-info-title">Body Part</p>
            <p class="exercise-modal-info-descr">${bodyPart}</p>
          </div>
          <div class="exercise-modal-info">
            <p class="exercise-modal-info-title">Equipment</p>
            <p class="exercise-modal-info-descr">${equipment}</p>
          </div>
          <div class="exercise-modal-info">
            <p class="exercise-modal-info-title">Popular</p>
            <p class="exercise-modal-info-descr">${popularity}</p>
          </div>
          <div class="exercise-modal-info">
            <p class="exercise-modal-info-title">Burned Calories</p>
            <p class="exercise-modal-info-descr">${burnedCalories}/${time} min</p>
          </div>
        </div>
        <div class="exercise-modal-descr">${description}</div>
        <div class="exercise-modal-buttons-block">
          <button id="add-to-favorites" class="btn btn-primary">
            Add to favorites
            <svg class="exercise-modal-btn-icon">
              <use href="./images/icons.svg#heart"></use>
            </svg>
          </button>
          <button id="give-rating" class="btn btn-secondary">Give a rating</button>
        </div>
      </div>
    </div>
    </div>`;
}

export { renderExerciseModal };

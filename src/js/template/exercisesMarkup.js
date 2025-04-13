import iconsPath from '../../images/icons.svg';
import { shortenText, caloriesPerTime } from '../utils/utils';

function exerciseCreateMarkup(exercises) {
  return exercises
    .map(
      exercise => `<li class="exercise-item" data-id="${exercise._id}">
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
              <use href="${iconsPath}#star"></use>
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
              <use href="${iconsPath}#arrow-right"></use>
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
              <use href="${iconsPath}#running-man"></use>
            </svg>
          </div>
          <h3 class="exercise-title-text">${window.innerWidth < 1440 ? shortenText(exercise.name, 25) : exercise.name}</h3>
        </div>
        <ul class="exercise-footer">
          <li>
            <span class="exercise-footer-item-accent">Burned calories:</span>
            ${window.innerWidth < 1440 ? shortenText(caloriesPerTime(exercise.burnedCalories, exercise.time), 6) : caloriesPerTime(exercise.burnedCalories, exercise.time)}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Body part:</span>
            ${window.innerWidth < 1440 ? shortenText(exercise.bodyPart, 4) : exercise.bodyPart}
          </li>
          <li>
            <span class="exercise-footer-item-accent">Target:</span>
            ${window.innerWidth < 1440 ? shortenText(exercise.target, 3) : exercise.target}
          </li>
        </ul>
      </li>`
    )
    .join('');
}

export { exerciseCreateMarkup };

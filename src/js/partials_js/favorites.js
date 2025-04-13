import { handleRenderQuote } from './quote.js';
 
document.addEventListener('DOMContentLoaded', () => {
    handleRenderQuote();
});



import { ExerciseService } from '../services/exercises.js';
import { exerciseCreateMarkup } from '../template/exercisesMarkup.js';

function getSafeElement(selector, errorMessage = '') {
    const element = document.querySelector(selector);
    if (!element) {
        console.error(`Element not found: ${selector}`, errorMessage);
        return null;
    }
    return element;
}


document.addEventListener('DOMContentLoaded', function() {
    const exerciseList = document.querySelector('.favorite-exercise-list');
    const exerciseContainer = document.querySelector('.exercise-container');
    const notFoundContainer = document.querySelector('.favorite_not_found_containers');
    const paginationWrapper = document.querySelector('.exercise-page-wrapper');
    
    // Ініціалізуємо сервіс
    const exerciseService = new ExerciseService();
    
    // Отримуємо ID вправ з localStorage
    const favoriteExerciseIds = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // Показуємо контейнер (прибираємо клас hidden)
    exerciseContainer.classList.remove('hidden');
    
    if (favoriteExerciseIds.length > 0) {
        loadAndDisplayExercises();
    } else {
        showNoExercisesMessage();
    }
    
    function loadAndDisplayExercises() {
        // Ховаємо повідомлення про відсутність вправ
        notFoundContainer.style.display = 'none';
        
        // Показуємо індикатор завантаження
        exerciseList.innerHTML = '<li class="loading-msg">Loading your favorite exercises...</li>';
        
        // Отримуємо повні дані про вправи
        const exercisesPromises = favoriteExerciseIds.map(function(id) {
            return exerciseService.getExerciseById(id).catch(function(error) {
                console.error('Error loading exercise ' + id + ':', error);
                return null;
            });
        });
        
        Promise.all(exercisesPromises)
            .then(function(exercises) {
                const validExercises = exercises.filter(function(ex) {
                    return ex !== null;
                });
                
                if (validExercises.length > 0) {
                    displayExercises(validExercises);
                } else {
                    showNoExercisesMessage();
                }
            })
            .catch(function(error) {
                console.error('Error loading favorites:', error);
                showLoadError();
            });
    }
    
    function displayExercises(exercises) {
        // Ховаємо повідомлення про відсутність вправ
        notFoundContainer.style.display = 'none';
        
        // Відображаємо список вправ
        exerciseList.innerHTML = exerciseCreateMarkup(exercises, true);
        
        // Тут можна додати логіку пагінації, якщо потрібно
        paginationWrapper.innerHTML = ''; // Очищаємо пагінацію
    }
    
    function showNoExercisesMessage() {
        // Показуємо повідомлення про відсутність вправ
        notFoundContainer.style.display = 'block';
        
        // Очищаємо список вправ і пагінацію
        exerciseList.innerHTML = '';
        paginationWrapper.innerHTML = '';
    }
    
    function showLoadError() {
        // Ховаємо повідомлення про відсутність вправ
        notFoundContainer.style.display = 'none';
        
        // Показуємо повідомлення про помилку
        exerciseList.innerHTML = '<li class="error-msg">Failed to load favorites. Please try again.</li>';
        paginationWrapper.innerHTML = '';
    }
});

import { handleRenderQuote } from './quote.js';
 
document.addEventListener('DOMContentLoaded', () => {
    handleRenderQuote();
});

import { ExerciseService } from '../services/exercises.js';
import { exerciseCreateMarkup } from '../template/exercisesMarkup.js';

document.addEventListener('DOMContentLoaded', async function() {
    const favoritesContainer = document.querySelector('.favorite_exercises');
    const notFoundMessage = document.querySelector('.favorite_not_found');
    
    // Створюємо екземпляр сервісу
    const exerciseService = new ExerciseService();
    
    // Отримуємо ID вправ з localStorage
    const favoriteExerciseIds = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (favoriteExerciseIds.length > 0) {
        try {
            // Додаємо індикатор завантаження
            favoritesContainer.innerHTML = '<p class="loading">Loading favorites...</p>';
            
            // Отримуємо повні дані про вправи
            const exercisesPromises = favoriteExerciseIds.map(id => 
                exerciseService.getExerciseById(id).catch(e => {
                    console.error(`Error loading exercise ${id}:`, e);
                    return null;
                })
            );
            
            const exercises = await Promise.all(exercisesPromises);
            const validExercises = exercises.filter(ex => ex !== null);
            
            if (validExercises.length > 0) {
                favoritesContainer.innerHTML = exerciseCreateMarkup(validExercises);
                notFoundMessage.style.display = 'none';
            } else {
                favoritesContainer.innerHTML = '';
                notFoundMessage.style.display = 'block';
            }
        } catch (error) {
            console.error('Error loading favorites:', error);
            favoritesContainer.innerHTML = '';
            notFoundMessage.style.display = 'block';
        }
    } else {
        favoritesContainer.innerHTML = '';
        notFoundMessage.style.display = 'block';
    }
});
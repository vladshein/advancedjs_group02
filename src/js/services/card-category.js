import axios from 'axios';
import { API_URL } from '../utils/consts.js';
import { showErrorToast } from '../utils/utils.js';

document.addEventListener('DOMContentLoaded', loadCategories);

async function loadCategories() {
  const categoriesContainer = document.getElementById('categories-container');

  const limit = window.innerWidth < 768 ? 9 : 12;
  try {
    const page1 = await axios.get(`${API_URL}/filters`, {
      params: {
        filter: 'Muscles',
        page: 1,
        limit: 12,
      },
    });

    const page2 = await axios.get(`${API_URL}/filters`, {
      params: {
        filter: 'Muscles',
        page: 2,
        limit: 12,
      },
    });

    const combinedResults = page1.data.results.concat(page2.data.results);

    const sortedResults = combinedResults.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });

    const limitedResults = sortedResults.slice(0, limit);

    categoriesContainer.innerHTML = '';
    limitedResults.forEach(function (category) {
      const categoryCard = document.createElement('div');
      categoryCard.className = 'category-card';

      categoryCard.innerHTML = `
        <img
          src="${category.imgURL}"
          srcset="${category.imgURL} 1x, ${category.imgURL} 2x"
          alt="${category.name} exercise"
        />
        <div class="category-name">${
          category.name.charAt(0).toUpperCase() + category.name.slice(1)
        }</div>
        <div class="category-type">${category.filter}</div>
      `;

      categoriesContainer.appendChild(categoryCard);
    });
  } catch (error) {
    showErrorToast(
      'Failed to load exercise categories. Please try again later.'
    );
  }
}

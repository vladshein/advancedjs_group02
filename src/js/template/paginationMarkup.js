import { handlePageClick } from "../handlers/exercise_handlers";
import { refs } from "../utils/refs";

function renderPagination(currentPage, totalPages) {
    const pagination = refs.exercisePageWrapper;
    pagination.innerHTML = ''; // Очистити попередній вміст

    const maxPrev = 2;
    const maxNext = 2;

    // Створює кнопку
    function createPageButton(page) {
        const btn = document.createElement('button');
        btn.classList.add('page-number');
        btn.textContent = page;
        if (page === currentPage) {
            btn.disabled = true;
            btn.classList.add('active');
        }
        btn.addEventListener('click', handlePageClick);
        return btn;
    }

    // Діапазон сторінок
    const startPage = Math.max(1, currentPage - maxPrev);
    const endPage = Math.min(totalPages, currentPage + maxNext);

    // Кнопка "←"
    // if (currentPage > 1) {
    //   const prev = document.createElement('button');
    //   prev.textContent = '←';
    //   prev.addEventListener('click', () => {
    //     renderPagination(currentPage - 1, totalPages);
    //   });
    //   pagination.appendChild(prev);
    // }

    // Кнопки сторінок
    for (let i = startPage; i <= endPage; i++) {
        pagination.appendChild(createPageButton(i));
    }
    console.log(currentPage, totalPages);
    // Кнопка "→"
    // if (currentPage < totalPages) {
    //   const next = document.createElement('button');
    //   next.textContent = '→';
    //   next.addEventListener('click', () => {
    //     renderPagination(currentPage + 1, totalPages);
    //   });
    //   pagination.appendChild(next);
    // }
}

export { renderPagination };
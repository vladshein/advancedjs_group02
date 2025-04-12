function renderPagination(
  paginationWrapper,
  currentPage,
  totalPages,
  clickHandler
) {
  paginationWrapper.innerHTML = ''; // Очистити попередній вміст

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
    btn.addEventListener('click', clickHandler);
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
    paginationWrapper.appendChild(createPageButton(i));
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

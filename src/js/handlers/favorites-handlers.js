async function handleDeleteFromFavorites(id) {
  const favorites = localStorage.getItem('favorites');
  const favoritesArray = JSON.parse(favorites);
  const updatedFavorites = favoritesArray.filter(favId => favId !== id);
  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
}

export { handleDeleteFromFavorites };

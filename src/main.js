// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації

import fetchImages from "./js/pixabay-api";
import { renderGallery } from "./js/render-functions";


document.querySelector('.search-form').addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();
  const query = event.currentTarget.elements.query.value.trim();
  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'The search field cannot be empty!',
    });
    return;
  }

  try {
    const data = await fetchImages(query);
    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    renderGallery(data.hits);
    new SimpleLightbox('.gallery a').refresh();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
    });
  }
}
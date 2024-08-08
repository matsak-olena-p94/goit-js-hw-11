// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import {
    renderImages,
    clearGallery,
    showLoader,
    hideLoader,
  } from "./js/render-functions";

import fetchImages from "./js/pixabay-api";


const form = document.querySelector('.search-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const queryInput = event.currentTarget.elements.query;
  const query = queryInput.value.trim();

  if (!query) {
    iziToast.error({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  fetchImages(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        renderImages(data.hits);
      }
    })
    .catch(error => {
      iziToast.error({ title: 'Error', message: error.message });
    })
    .finally(() => {
      hideLoader();
      queryInput.value = '';
    });
});


// const form = document.querySelector('.search-form');

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const queryInput = event.currentTarget.elements.query;
//   const query = queryInput.value.trim();

//   if (!query) {
//     iziToast.error({
//       message: 'Please enter a search query!',
//       position: 'topRight',
//     });
//     return;
//   }


//   clearGallery();
//   showLoader();

//  fetchImages(query)
//  .then(data => {
//     if (data.hits.length === 0) {
//       iziToast.error({
//         message: 'Sorry, there are no images matching your search query. Please try again!',
//         position: 'topRight',
//       });
//     } else {
//         renderImages(data.hits);
//       }
//     })

//   .catch (error) {
//     iziToast.error({
//       title: 'Error',
//       message: error.message,
//     })
// };
//     .finally(() => {
//         hideLoader();
//         queryInput.value = '';
//       });
    
//   });





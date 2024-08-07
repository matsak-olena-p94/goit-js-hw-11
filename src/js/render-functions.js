// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// export function renderGallery(data) {
//     const lightbox = new SimpleLightbox("gallery", { 
//         captions: true,
//         captionsData: 'alt',
//         captionDelay: 250
//      });
//     const gallery = document.querySelector(".gallery");
//     let images =  data.hits.map((hit) => {
//       return `
//         <a href="${hit.largeImageURL}" class="gallery-item">
//           <img src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" />
//           <div class="info">
//             <p><b>Likes:</b> ${hit.likes}</p>
//             <p><b>Views:</b> ${hit.views}</p>
//             <p><b>Comments:</b> ${hit.comments}</p>
//             <p><b>Downloads:</b> ${hit.downloads}</p>
//           </div>
//         </a>`;
//     }).join('');
//     list.insertAdjacentHTML("afterbegin", images);
//     lightbox.refresh();
//   }
  
// export function clearImages() {
//     const gallery = document.querySelector(".gallery");
//     list.innerHTML = "";
// }



export function renderGallery(images) {
    const lightbox = new SimpleLightbox("gallery", { 
                captions: true,
                captionsData: 'alt',
                captionDelay: 250
             });
    const gallery = document.querySelector('.gallery');
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return `
        <a href="${largeImageURL}" class="gallery-item">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          <div class="info">
            <p><b>Likes:</b> ${likes}</p>
            <p><b>Views:</b> ${views}</p>
            <p><b>Comments:</b> ${comments}</p>
            <p><b>Downloads:</b> ${downloads}</p>
          </div>
        </a>`;
    }).join('');
    gallery.innerHTML = markup;
  }
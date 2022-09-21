import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const listForRender = document.querySelector('.gallery');
const imageMarkup = createGalleryMarkup(galleryItems);
listForRender.insertAdjacentHTML('beforeend', imageMarkup);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});

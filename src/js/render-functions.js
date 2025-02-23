import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');

export function renderImages(images) {
  gallery.innerHTML = images
    .map(
      image => `
        <a href="${image.largeImageURL}" class="gallery-item">
            <img src="${image.webformatURL}" alt="${image.tags}" />
        </a>
    `
    )
    .join('');
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

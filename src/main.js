import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = e.target.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.error({ message: 'Please enter a search term!' });
    return;
  }
  clearGallery();
  loader.classList.add('show');

  try {
    const images = await fetchImages(query);
    if (images.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'No images found, try another query',
      });
    } else {
      renderImages(images);
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: 'Something went wrong' });
  } finally {
    loader.classList.remove('show');
  }
});

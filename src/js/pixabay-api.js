import axios from 'axios';

const API_KEY = '48944298-6db138da2f96cff679e6bbba9';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data.hits;
  } catch (error) {
    throw new Error('Error fetching images');
  }
}

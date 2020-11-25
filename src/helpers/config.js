const API_URL = 'https://pixabay.com/api/';
const API_KEY = process.env.REACT_APP_API_KEY;

const SEARCH_IMAGE_BASE_URL = `${API_URL}?key=${API_KEY}&q=`;
const GET_IMAGES_URL = `${API_URL}?key=${API_KEY}`;

const SEARCH_VIDEO_BASE_URL = `${API_URL}videos/?key=${API_KEY}&q=`;
const GET_VIDEOS_URL = `${API_URL}videos/?key=${API_KEY}`;

const IMAGE_BASE_URL = 'https://pixabay.com/get/';

export {
  API_URL,
  API_KEY,
  SEARCH_IMAGE_BASE_URL,
  GET_IMAGES_URL,
  IMAGE_BASE_URL,
  SEARCH_VIDEO_BASE_URL,
  GET_VIDEOS_URL,
};

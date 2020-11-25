import {
  SEARCH_IMAGE_BASE_URL,
  GET_IMAGES_URL,
  SEARCH_VIDEO_BASE_URL,
  GET_VIDEOS_URL,
} from '../helpers/config';

const apiSettings = {
  fetchData: async (url) => {
    return await (await fetch(url)).json();
  },
  endpointImages: (searchTerm, page) => {
    return searchTerm
      ? `${SEARCH_IMAGE_BASE_URL}${searchTerm}&page=${page}`
      : `${GET_IMAGES_URL}&page=${page}`;
  },
  endpointVideos: (searchTerm, page) => {
    return searchTerm
      ? `${SEARCH_VIDEO_BASE_URL}${searchTerm}&page=${page}`
      : `${GET_VIDEOS_URL}&page=${page}`;
  },
};

export default apiSettings;

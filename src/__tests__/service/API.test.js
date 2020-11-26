import API from '../../service/API';
import {
  GET_IMAGES_URL,
  SEARCH_IMAGE_BASE_URL,
  GET_VIDEOS_URL,
  SEARCH_VIDEO_BASE_URL,
} from '../../helpers/config';

describe('Test functions defined on API.js', () => {
  const page = 1;
  const searchTerm = 'cat+and+dog';
  //const url = `${GET_IMAGES_URL}&page=${page}`;
  test('should return url for fetch images from api', () => {
    expect(API.endpointImages('', 1)).toBe(`${GET_IMAGES_URL}&page=${page}`);
  });

  test('Also should return url for fetch images when receiving a search term', () => {
    expect(API.endpointImages(searchTerm, 1)).toBe(
      `${SEARCH_IMAGE_BASE_URL}${searchTerm}&page=${page}`
    );
  });

  test('Also return url for fetch videos from api', () => {
    expect(API.endpointVideos('', 1)).toBe(`${GET_VIDEOS_URL}&page=${1}`);
  });

  test('Also should return url for fetch videos when receiving a search term', () => {
    expect(API.endpointVideos(searchTerm, 1)).toBe(
      `${SEARCH_VIDEO_BASE_URL}${searchTerm}&page=${page}`
    );
  });

  /*test('Fetch images should return 20 itens', async () => {
    const { hits } = await API.fetchData(url);
    expect(hits.length).toBe(20);
  });*/
});

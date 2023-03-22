export const searchImages = (value, page = 1) => {
  //https:pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

  const BASE_URL = 'https://pixabay.com/api';
  const API_KEY = '29711315-8270253fad608a552f88c48ec';

  return fetch(
    `${BASE_URL}/?q=${value}&key=${API_KEY}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`,
  );
};

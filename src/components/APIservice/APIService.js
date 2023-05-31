import axios from 'axios';

const KEY = '36257865-655e5ef0d461eea0383acd722';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getSearchPhotoAPI = (query, page = 1) => {
  return axios
    .get(`?key=${KEY}&q=${query}&page=${page}&per_page=10&image_type=photo`)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(`Error fetching search photos: ${error.message}`);
    });
};

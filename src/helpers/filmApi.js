import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY_API = '3c137c4d293c8ccacc79a0998fff8ad4';

export const getFilmFromApi = async (url = '') => {
  const { data } = await axios.get(url);
  return data;
};

// список страниці Home
export function moviesTrending() {
  return getFilmFromApi(`${BASE_URL}/trending/movie/day?api_key=${KEY_API}`);
}
// список с Home с детальной информацией
export function movieInfo(movieId) {
  return getFilmFromApi(`${BASE_URL}/movie/${movieId}?api_key=${KEY_API}`);
}
// список cast
export function movieCast(movieId) {
  return getFilmFromApi(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY_API}&language=en-US`
  );
}
// список reviews
export function movieReviews(movieId) {
  return getFilmFromApi(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY_API}&language=en-US&page=1`
  );
}
// поиск по инпуту
export function moviesSearch(searchName, page) {
  return getFilmFromApi(
    `${BASE_URL}/search/movie?api_key=${KEY_API}&page=${page}&query=${searchName}&language=en-US&include_adult=false`
  );
}
// `3/search/movie?api_key=${myKey}&language=en-US&page=1&include_adult=false&query=${search}`;

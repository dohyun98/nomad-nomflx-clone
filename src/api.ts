const API_KEY = "d8072e72e42005facd65c0c62f18cff8";
const BASE_PATH = "https://api.themoviedb.org/3";

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then((response) => response.json());
}

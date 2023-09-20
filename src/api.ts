const API_KEY = "d8072e72e42005facd65c0c62f18cff8";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}
export interface IGetDetail {
  id: number;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  vote_average: number; //평점
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  production_companies: [
    {
      id: number;
      name: string;
    }
  ];
  runtime: number;
  title: string;
  original_title?: string;
  first_air_date: string;
  release_date: string;
}
export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then((response) => response.json());
}

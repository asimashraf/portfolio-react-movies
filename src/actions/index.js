import axios from 'axios';

const API_KEY = '28d66573';
const ROOT_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const FETCH_MOVIE = 'FETCH_MOVIE';

export function fetchMovie(movie) {
    const url = `${ROOT_URL}&t=${movie}`;
    const request = axios.get(url);


    return {
        type: FETCH_MOVIE,
        payload: request
    };
}
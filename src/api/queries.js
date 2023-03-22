import { url } from "./api-path";
import { apiKey } from "./api-key";

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return (data.results);
    } catch (error) {
        throw new Error("Somesing wrong");
    }
};


export const getMovies = async () => await fetchData(`${url}/discover/movie?${apiKey}`);
export const getPopularMovies = async () => await fetchData(`${url}/movie/popular?${apiKey}`);
export const getTopRatedMovies = async () => await fetchData(`${url}/movie/top_rated?${apiKey}`);
export const getUpcomingMovies = async () => await fetchData(`${url}/movie/upcoming?${apiKey}`);
export const getSearchedMovies = async (term) => await fetchData(`${url}search/movie?${apiKey}&query=${term}`);


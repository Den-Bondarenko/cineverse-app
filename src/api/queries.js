import { url } from "./api-path";
import { apiKey } from "./api-key";

const fetchData = async (url, setMovies) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return setMovies(data.results);
    } catch (error) {
        throw new Error("Somesing wrong");
    }
};

export const getPopularMovies = async (setMovies) => await fetchData(`${url}/discover/movie?${apiKey}`, setMovies);
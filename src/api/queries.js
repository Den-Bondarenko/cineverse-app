import { url } from "./api-path";
import { apiKey } from "./api-key";

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
        throw new Error("Somesing wrong");
    }
};

export const getPopularMovies = async () => await fetchData(`${url}/movie/popular?${apiKey}`);
import axios from "axios";


export function fetchBackgroundChanger(value = "nature") {
    return axios.get(`https://api.pexels.com/v1/search?query=${value}`, {
        headers: {
            Authorization: import.meta.env.VITE_PEXEL_KEY,
        },
    });
}








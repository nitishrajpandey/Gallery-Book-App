import axios from "axios";


export function fetchGalleryBookApi(value, page) {
    return axios.get(`https://api.pexels.com/v1/search/?page=${page}&per_page=15&query=${value}`, {
        headers: {
            Authorization: import.meta.env.VITE_PEXEL_KEY,
        },
    });
}








import axios from "axios";


export function nextpageApi(next_page) {
    return axios.get(`${next_page}`, {
        headers: {
            Authorization: import.meta.env.VITE_PEXEL_KEY,
        },
    });
}








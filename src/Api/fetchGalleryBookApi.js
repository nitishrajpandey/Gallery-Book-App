import axios from "axios";


export function fetchGalleryBookApi(value, page=1) {
    return axios.get(`https://api.pexels.com/v1/search/?page=${page}&per_page=15&query=${value}`, {
        headers: {
            Authorization: import.meta.env.VITE_PEXEL_KEY,
        },
    });
}





// import axios from "axios";

// const PEXELS_API_KEY = import.meta.env.VITE_PEXEL_KEY;
// const PEXELS_API_URL = "https://api.pexels.com/v1/search/";

// export async function fetchGalleryBookApi(value, page) {
//     try {
//         const response = await axios.get(PEXELS_API_URL, {
//             params: {
//                 page: page,
//                 per_page: 15,
//                 query: value
//             },
//             headers: {
//                 Authorization: PEXELS_API_KEY
//             }
//         });
        
//         return response.data;
//     } catch (error) {
//         // Handle errors gracefully
//         console.error("Error fetching gallery books:", error);
//         throw error;
//     }
// }



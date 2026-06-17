import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || "http://lcalhost:8080",
})


export default api;

// export const pokeApi = axios.create({
//     baseURL: import.meta.env.VITE_POKE_API_URL
// })
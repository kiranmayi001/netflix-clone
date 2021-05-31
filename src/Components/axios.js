import axios from 'axios';



const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        'content-type':'application/octet-stream',
    }
})

export default instance;
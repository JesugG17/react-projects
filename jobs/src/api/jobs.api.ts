import axios from "axios";


export const jobsApi = axios.create({
    baseURL: 'https://jsearch.p.rapidapi.com/search?query=software%engineer&num_pages=15',
    headers: {
        'X-RapidAPI-Key': 'adbae4cff5msh059a5d88e330682p1501d8jsn77ce8dda101c',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
});
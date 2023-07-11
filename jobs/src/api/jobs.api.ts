import axios from "axios";


export const jobsApi = axios.create({
    baseURL: 'https://jsearch.p.rapidapi.com/search?query=software%engineer&num_pages=15',
    headers: {
        'X-RapidAPI-Key': '7285790da3mshcbea04c0d2c1326p1a838fjsnb19e30f33289',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
});
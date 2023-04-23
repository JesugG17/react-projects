import axios from 'axios';



export const mapboxInstance = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
    params: {
        'access_token': 'pk.eyJ1IjoiamNzdXMxNyIsImEiOiJjbDlxYTZma2IwNGlhM3BxbWlpNGI4cW5wIn0.VWLwlEWhlzmtIWEVbvsBsg'
    }
});

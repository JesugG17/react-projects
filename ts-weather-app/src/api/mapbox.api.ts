import axios from 'axios';



export const mapboxInstance = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
    params: {
        'access-token': 'pk.eyJ1IjoiamNzdXMxNyIsImEiOiJjbDlxYTZma2IwNGlhM3BxbWlpNGI4cW5wIn0.VWLwlEWhlzmtIWEVbvsBsg'
    }
});

console.log(mapboxInstance);
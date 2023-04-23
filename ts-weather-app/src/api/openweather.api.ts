import axios from 'axios';

export const openWeatherInstance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: {
        'appid': 'ea7e471915ba3199a20637b94a26cd56'
    }
})
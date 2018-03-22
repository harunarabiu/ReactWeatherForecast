import axios from 'axios'
const API_KEY = '1750b70df2f699f93a568881c1f6be70';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},NG`;
    const request = axios.get(url);

    console.log("Request:", request)
    return {
        type: FETCH_WEATHER,
        payload: request
    };
        

}
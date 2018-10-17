import axios from "axios";

const WEATHER_API_KEY = "092649fcc9416ffdcb03925e40e15ec1";
const UNSPLASH_API_KEY = "6960fbf304a134a56cd1d75ee40b1477947c9f1d0605dbd5727e6f7022bfd4b3";

export const getWeather = (city, country) => {
  return async (dispatch) => {
    try {

      const [ weather, picture ] = await Promise.all([
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${WEATHER_API_KEY}`),
        axios.get(`https://api.unsplash.com/search/photos?query=${city}&client_id=${UNSPLASH_API_KEY}`),
      ]);

      dispatch({type: "GET_WEATHER", payload: { weather: weather.data, picture: picture.data }});

    } catch (err) { console.error(err) }
  }
};

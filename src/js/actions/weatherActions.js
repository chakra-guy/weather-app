import axios from "axios";

const WEATHER_API_KEY = "092649fcc9416ffdcb03925e40e15ec1";
const UNSPLASH_API_KEY = "6960fbf304a134a56cd1d75ee40b1477947c9f1d0605dbd5727e6f7022bfd4b3";

export const getWeather = (city, country) => {
  // return function (dispatch) {
  //   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${WEATHER_API_KEY}`)
  //     .then(response => {
  //       dispatch({type: "GET_WEATHER_DATA", payload: response.data});
  //     })
  //   axios.get(`https://api.unsplash.com/search/photos?query=${city}&client_id=${UNSPLASH_API_KEY}`)
  //     .then(response => {
  //       dispatch({type: "GET_WEATHER_PIC", payload: response.data});
  //     })
  // }

  // return function (dispatch) {
  //   const weatherPromise = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${WEATHER_API_KEY}`);
  //   const picturePromise = axios.get(`https://api.unsplash.com/search/photos?query=${city}&client_id=${UNSPLASH_API_KEY}`);
  //
  //   Promise.all([ weatherPromise, picturePromise ])
  //     .then(([ weather, picture ]) => {
  //       dispatch({type: "GET_WEATHER", payload: { weather: weather.data, picture: picture.data }});
  //     })
  //     .catch(err => console.error(err));
  // }

  return async (dispatch) => {
    try {
      const weatherPromise = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${WEATHER_API_KEY}`);
      const picturePromise = axios.get(`https://api.unsplash.com/search/photos?query=${city}&client_id=${UNSPLASH_API_KEY}`);

      const [ weather, picture ] = await Promise.all([ weatherPromise, picturePromise ]);

      dispatch({type: "GET_WEATHER", payload: { weather: weather.data, picture: picture.data }});

    } catch (err) { console.error(err) }
  }
};

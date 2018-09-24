export const weatherReducer = (state = {}, { type, payload }) => {

  switch (type) {
    case 'GET_WEATHER':
      const { weather, picture } = payload;
      const pic = picture.total !== 0
                ? picture.results[Math.floor(Math.random() * 5)].urls.thumb
                : '';
      return {
        ...state,
        city: weather.name,
        country: weather.sys.country,
        temperature: weather.main.temp,
        humidity: weather.main.humidity,
        description: weather.weather[0].description,
        picture: pic,
        error: '',
      };

    default:
      return state;
  }
};

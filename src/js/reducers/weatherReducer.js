export const weatherReducer = (state = {}, action) => {
  switch (action.type) {

    case 'ADD_LOCATION':
      return {...state, location: action.payload};

    case 'GET_WEATHER_DATA':
      return {
        ...state,
        city: action.payload.name,
        country: action.payload.sys.country,
        temperature: action.payload.main.temp,
        humidity: action.payload.main.humidity,
        description: action.payload.weather[0].description,
        error: '',
      };

    case 'GET_WEATHER_PIC':
      return {
        ...state,
        picture: action.payload.total !== 0
                  ? action.payload.results[Math.floor(Math.random() * 5)].urls.thumb
                  : ''
      };

    case 'GET_WEATHER_ERR':
      console.log(action.payload);
      return state;

    default:
      return state;
  }
};

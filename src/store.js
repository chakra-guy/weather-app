import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from "redux-thunk"

import { weatherReducer } from "./js/reducers/weatherReducer"

const middleware = applyMiddleware(thunk, createLogger())

export const store = createStore(combineReducers({
  weatherReducer
}), middleware);

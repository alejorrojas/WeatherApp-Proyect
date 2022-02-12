import { Action, Reducer } from "redux";
import { DELETE_CITY, GET_CITY } from "./action-types";
import { action, ciudades } from "./Interfaces";

const initialState: ciudades[] = [];

const rootReducer: Reducer<ciudades[], Action<string>> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_CITY:
      return [action.payload, ...state];
    case DELETE_CITY: 
      return state.filter(cities=> cities.id !== action.payload)
    default:
      return state;
  }
};

export default rootReducer;

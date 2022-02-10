
import { Action, Reducer } from "redux";
import { GET_CITY } from "./action-types";
import { action, ciudades } from "./Interfaces";

const initialState: ciudades[] = [];

 const rootReducer: Reducer<ciudades[], Action<string>> = (state = initialState, action) => {
  switch (action.payload) {
    case GET_CITY: return [...state, action.payload]
    default:
      return state;
  }
};

export default rootReducer
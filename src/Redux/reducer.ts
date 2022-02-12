import {  Reducer } from "redux";
import { DELETE_CITY, ERROR, GET_CITY } from "./action-names";
import { ciudades } from "./Interfaces";
import Swal from 'sweetalert2'

const initialState: ciudades[] = [];

const rootReducer: Reducer<ciudades[]> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_CITY:
      if(state.find((c) => c.id === action.payload.id)) Swal.fire('Ciudad ya agregada', ' ', 'warning')
      else return [action.payload, ...state];
    case DELETE_CITY:
      return state.filter((cities) => cities.id !== action.payload);
    case ERROR: {
      Swal.fire('Ciudad no encontrada', '', 'error')
    }
    default:
      return state;
  }
};

export default rootReducer;

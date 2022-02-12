import axios from "axios";
import { Action } from "redux";
import { DELETE_CITY, ERROR, GET_CITY } from "./action-names";

const API_KEY = "4ae2636d8dfbdc3044bede63951a019b";

export const getCity = (ciudad: string) => {
  return (dispatch: Function) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
      )
      .then((response) => {
        dispatch({
          type: GET_CITY,
          payload: response.data,
        });
      })
      .catch(() => {
        dispatch({
          type: ERROR,
        });
      });
  };
};

export const deleteCity = (id: string)=> {
  return { type: DELETE_CITY, payload: id };
};

import axios from "axios";
import { Action } from "redux";

const API_KEY = "4ae2636d8dfbdc3044bede63951a019b";
export const GET_CITY = "GET_CITY";
export const DELETE_CITY = "DELETE_CITY";

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
          type: "",
        });
      });
  };
};

export const deleteCity = (id: string): Action => {
  return { type: DELETE_CITY, payload: id };
};

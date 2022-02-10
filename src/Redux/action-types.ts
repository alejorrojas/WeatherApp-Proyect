import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const GET_CITY = "GET_CITY";

export const getCity = (ciudad: string) => {
  return (dispatch: Function) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        dispatch({
          type: GET_CITY,
          payload: response.data,
        }).catch(() => {
          dispatch({
            type: "",
          });
        });
      });
  };
};

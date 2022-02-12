
import {  MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCity } from "../Redux/action-types";

import "../styles/Card.modulate.css";


export interface PropsCard {
    name: string,
    min: number,
    max: number,
    img: string,
    id: string

}


export default function Card({ min, max, name, img, id }: PropsCard) {
  const dispatch = useDispatch()

  const handleClose: MouseEventHandler<HTMLButtonElement> = (event) => {
    dispatch(deleteCity(id))

  }

  return (
    <div className="card">
        
      <div id="closeIcon" className="row">
        <button onClick={handleClose} className="btn btn-sm btn-danger close-btn">
          X
        </button>
      </div>
      <div className="card-body">
        <Link  to={`/ciudad/${id}`} style={{textDecoration: 'none', outline: 'none'}}>
          <h5 className="card-title">{name}</h5>
        </Link>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Max</p>
            <p>{max}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="iconoClima"
              src={`http://openweathermap.org/img/wn/${img}@2x.png`}
              width="80"
              height="80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
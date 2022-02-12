import React from "react";
import Card from "./Card";
import "../styles/Cards.modulate.css";
import { useSelector } from "react-redux";

export interface PropsCities {
  id: string;
  name: string;
  main: {
    temp_min: number;
    temp_max: number;
  };
  weather: [
    {
      icon: string;
    }
  ];
}

interface PropsCards {
  cities: PropsCities[];
}

export default function Cards() {
  const cities = useSelector<PropsCities[], PropsCities[]>((state) => state);
  const card = cities.map((c: PropsCities) => (
    <Card
      id={c.id}
      key={c.name}
      max={c.main.temp_max}
      min={c.main.temp_min}
      name={c.name}
      img={c.weather[0].icon}
    />
  ));

  if (Array.isArray(cities) && cities.length) {
    if (cities.length > 6) {
      cities.pop();
    }
    return (
      <div className="grid-cards">
        {/* <div className="cards-main">{card[card.length-1]}</div> */}
        <div className="cards-back">{card}</div>
      </div>
    );
  } else {
    return (
      <div className="else-box">
        {console.log(cities)}
        <h1 className="else-title">Sin ciudades</h1>
      </div>
    );
  }
}

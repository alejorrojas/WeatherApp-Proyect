import React from "react";
import Card from "./Card";
import "../styles/Cards.modulate.css";

interface PropsCities {
        name: string,
        main: {
            temp_min: number, 
            temp_max: number, 
        },
        weather: [
            {
                icon: number
            }
        ]
}

interface PropsCards {
    cities: PropsCities[]
}

export default function Cards() {
//   const card = cities.map((c) => (
//     <Card
//       id={c.id}
//       key={c.name}
//       max={c.max}
//       min={c.min}
//       name={c.name}
//       img={c.img}
//       onClose={() => onClose(c.id)}
//     />
//   ));

//   if (Array.isArray(cities) && cities.length) {
//     return (
//       <div className="grid-cards">
//         {/* <div className="cards-main">{card[card.length-1]}</div> */}
//         <div className="cards-back">{card}</div>
//       </div>
//     );
//   } else {
    return (
      <div className="else-box">
        <h1 className="else-title">Sin ciudades</h1>
      </div>
    );
  }

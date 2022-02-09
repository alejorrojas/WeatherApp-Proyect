import React from "react";
import Card from "./Card";

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

export default function Cards(props: PropsCards) {


  const array = props.cities.map((city: PropsCities) => (
    <Card
      key={city.name}
      name={city.name}
      min={city.main.temp_min}
      max={city.main.temp_max}
      img={city.weather[0].icon}
    />
  ));

  return <div>{array}</div>;
}
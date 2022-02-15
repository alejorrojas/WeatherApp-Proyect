import Card from "./Card";
import "../styles/Cards.modulate.css";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

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

  if(screen.width < 1000) {
    Swal.fire({
      title: 'Oops...',
      html: 'We are still working in our mobile set up',
      icon: 'info',
      allowOutsideClick: false,
      allowEnterKey: false,
      showConfirmButton: false
    })
  }
  

  if (Array.isArray(cities) && cities.length) {
    if (cities.length > 6) {
      cities.pop();
    }
    return <div className="cards-back">{card}</div>;
  } else {
    return (
      <div className="else-box">
        <h1 className="else-title">Add new cities</h1>
      </div>
    );
  }
}

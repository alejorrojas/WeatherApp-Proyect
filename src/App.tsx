import "./App.css";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import Cards, { PropsCities } from "./components/Cards";
import Ciudad from "./components/Ciudad";
import About from "./components/About";
import { useSelector } from "react-redux";

const [allCover] = document.getElementsByTagName("body");

const setCover = (temp: number) => {
  console.log(temp);
  if (temp > 28) allCover.setAttribute("class", "hot");
  else if (temp < 28 && temp > 10) allCover.setAttribute("class", "warm");
  else if (temp < 10) allCover.setAttribute("class", "cold");
};

function App() {
  const [city, ...rest] = useSelector<PropsCities[], PropsCities[]>(
    (state) => state
  );

  return (
    <div className="app-container">
      {city
        ? setCover(city.main.temp_min)
        : allCover.setAttribute("class", "default")}

      <Route path="/" render={() => <NavBar />} />
      <Route exact={true} path="/" render={() => <Cards />} />
      <Route
        path="/ciudad/:ciudadId"
        exact={true}
        render={() => <Ciudad />}
      />
      <Route path="/about" exact={true} component={About} />
    </div>
  );
}

export default App;

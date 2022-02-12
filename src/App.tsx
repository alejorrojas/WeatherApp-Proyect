import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import Cards, { PropsCities } from "./components/Cards";
import Ciudad from "./components/Ciudad";
import About from "./components/About";
import { useSelector } from "react-redux";


const [allCover] = document.getElementsByTagName('body');
const temp = 25

function App() {
  const city = useSelector<PropsCities[], PropsCities[]>(state=>state)

  return (
    <div className="app-container">
      {/* algo por aca va */}
      {city.length ? city[0].main.temp_min > 20 ? allCover.setAttribute('class', 'hot') : allCover.setAttribute('class', 'cold') : allCover.setAttribute('class', 'default')}

      <Route path="/" render={() => <NavBar />} />
      <Route
        exact={true}
        path="/"
        render={() => <Cards />}
        // temp > 10 => style={{ backgound: url} } else
      />
      <Route
        path="/ciudad/:ciudadId"
        exact={true}
        render={({ match }) => <Ciudad />}
      />
      <Route path="/about" exact={true} component={About} />
    </div>
  );
}

export default App;

import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import Cards from "./components/Cards";
import Ciudad from "./components/Ciudad";
import About from "./components/About";


function App() {
  
  return (
    <div className="App">
      <Route path="/" render={() => <NavBar  />} />
      <Route
        exact={true}
        path="/"
        render={() => <Cards />}
        // temp > 10 => style={{ backgound: url} } else
      />
      <Route
        path="/ciudad/:ciudadId"
        exact={true}
        render={({ match }) => (
          <Ciudad  />
        )}
      />
      <Route path="/about" exact={true} component={About}/>
    </div>
  );
}

export default App;

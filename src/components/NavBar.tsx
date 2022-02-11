import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

import "../styles/Nav.modulate.css";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">
        <div className="brand-box">
          <img src={Logo} alt="logo Henry" className="logoHenry" />
          <Link
            className="about"
            to="/about"
            style={{ textDecoration: "none", outline: "none" }}
          >
            <span>About</span>
          </Link>
        </div>
      </Link>

      <SearchBar></SearchBar>
    </nav>
  );
}

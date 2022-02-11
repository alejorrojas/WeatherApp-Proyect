import React from "react";
import '../styles/SearchBar.modulate.css'

export default function SearchBar() {
  //agregar onSubmit y on Change
  return (
    <form>
      <input className="input" type="text" placeholder="Ciudad..." />
      <button className="button" type="submit">
        +
      </button>
    </form>
  );
}

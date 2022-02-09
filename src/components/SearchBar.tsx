import React from "react";

export default function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="Ciudad..." />
      <button onClick={()=> alert('Algo')}>
        Agregar
      </button>
    </div>
  );
}
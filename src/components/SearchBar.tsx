import  { ChangeEvent, FormEvent, FormEventHandler, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getCity } from "../Redux/action-types";
import '../styles/SearchBar.modulate.css'

export default function SearchBar() {
  const [state, setState] = useState('')
  const dispatch = useDispatch()
  const inputCity =  useRef<HTMLInputElement>(null)

  const handleOnChange  = (e: ChangeEvent<HTMLInputElement>) =>{
    setState(e.target.value)
    console.log(state)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(`estoy haciendo submit con esto${state}`)
    e.preventDefault();
    dispatch(getCity(state))
    setState('')
    inputCity.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="input" type="text" autoFocus
              ref={inputCity} value={state} placeholder="Ciudad..." onChange={handleOnChange}/>
      <button className="button" type="submit">
        +
      </button>
    </form>
  );
}

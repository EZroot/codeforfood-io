import react from 'react';
import './Button.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function LinkButton(props){
  return (
    <Link class="Button" to={props.location}>
      <span>{props.text}</span>
    </Link>
  )
}

export function Button(props){
  return (
    <button class="Button" onClick={props.onClick}>
      <span>{props.text}</span>
    </button>
  )
}

export function ButtonFilled(props){
  return (
    <button class="ButtonFilled" onClick={props.onClick}>
      <span>{props.text}</span>
    </button>
  )
}

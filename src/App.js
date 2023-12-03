import 'bootstrap/dist/css/bootstrap.css';
import {Footer} from "./components/Footer";
import {Navigation} from "./components/Navigation";
import {BrowserRouter, redirect, Route, Routes} from "react-router-dom";
import {Router} from "./Router";

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const userLogged = getCookie("logged");

if(!userLogged) {
  setCookie("logged", false, 50000);
}

function App() {
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
}

export default App;

import React, { useState, useContext } from "react";
import {Link} from 'react-router-dom'
import {signInWithGoogle} from '../Services/firebase'
import {logOut} from '../Services/firebase'

export default function NavTop() {
  const [colapso, setColapso] = useState(true);
  const manejarNavbar = () => setColapso(!colapso);

 
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark fw-bold">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Sazón y Canela
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!colapso ? true : false}
          aria-label="Toggle navigation"
          onClick={manejarNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${colapso? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <ul className="navbar-nav">
              <li className="nav-item">
               
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/carrito">
                <i className="fas fa-shopping-basket"></i> Carrito
               </Link>
               </li>
               <li className="nav-item">
                  <button className="btn btn-dark btn-sm nav-link active me-1" onClick={signInWithGoogle}>
                      Login
                  </button>
               </li>
               <li className="nav-item">
                  <button className="btn btn-dark btn-sm nav-link active me-1" onClick={logOut}>
                      Salir
                  </button>
               </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

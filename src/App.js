//dependencies
import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import "./App.css";

//components import
import AboutUs from "./components/AboutUs/AboutUs";
import CharacterDisplay from "./components/CharacterDisplay/CharacterDisplay";
import CharacterCreator from "./components/CharacterCreator/ChracterCreator";
import CharacterUpdate from "./components/CharacterUpdate/CharacterUpdate";
import Spells from "./components/Spells/Spells";

function App() {
  return (
    <div className="homepage">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            DnD Character Creator
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to='/CharacterCreator'>Character Creator</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/CharacterDisplay'>View All Characters</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/CharacterUpdate'>Update Character</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/Spells'>Spells</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/AboutUs'>About Us!</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/CharacterCreator" element={<CharacterCreator />} />,
          <Route path="/CharacterDisplay" element={<CharacterDisplay />} />,
          <Route path="/CharacterUpdate" element={<CharacterUpdate />} />,
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Spells" element={<Spells />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

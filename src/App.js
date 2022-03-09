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
      {/* <nav>
            <Link to='/CharacterCreator'> <button>Character Creator</button> </Link>
            <Link to='/CharacterDisplay'> <button>View All Characters</button> </Link>
            <Link to='/AboutUs'><button>About Us!</button></Link>
            <Link to='/CharacterUpdate'><button>Update Character</button> </Link>
            <Link to='/Spells'><button>Spells</button></Link>
          </nav> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                {/* <a class="nav-link" aria-current="page" href="#">
                  Home
                </a> */}
                <Link className="nav-link" to='/CharacterCreator'>Character Creator</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
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

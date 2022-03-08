//dependencies
import React  from "react";
import {Routes, Link, Route} from 'react-router-dom'
import "./App.css";
import CharacterDisplay from "./CharacterDisplay/CharacterDisplay";

//components import
import AboutUs from './components/AboutUs/AboutUs'
import CharacterDisplay from './components/CharacterDisplay/CharacterDisplay'
import CharacterCreator from './components/CharacterCreator/ChracterCreator'

function App() {
    return (
        <div className="homepage">
          <nav>
            <Link to='/CharacterCreator'> <button>Character Creator</button> </Link>
            <Link to='/CharacterDisplay'> <button>View All Characters</button> </Link>
            <Link to='/AboutUs'><button>About Us!</button></Link>
          </nav>
        <main>
          <Routes>
            <Route path='/CharacterCreator' element={<CharacterCreator />} />,
            <Route path='/CharacterDisplay' element={<CharacterDisplay />} />,
            <Route path='/AboutUs' element={<AboutUs />} />
          </Routes>
        </main>
      </div>
    )
}

export default App;
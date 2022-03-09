//dependencies
import React  from "react";
import {Routes, Link, Route} from 'react-router-dom'
import "./App.css";

//components import
import AboutUs from './components/AboutUs/AboutUs'
import CharacterDisplay from './components/CharacterDisplay/CharacterDisplay'
import CharacterCreator from './components/CharacterCreator/ChracterCreator'
import CharacterUpdate from './components/CharacterUpdate/CharacterUpdate'
import Spells from "./components/Spells/Spells";

function App() {
    return (
        <div className="homepage">
          <nav>
            <Link to='/CharacterCreator'> <button>Character Creator</button> </Link>
            <Link to='/CharacterDisplay'> <button>View All Characters</button> </Link>
            <Link to='/AboutUs'><button>About Us!</button></Link>
            <Link to='/CharacterUpdate'><button>Update Character</button> </Link>
            <Link to='/Spells'><button>Spells</button></Link>
          </nav>
        <main>
          <Routes>
            <Route path='/CharacterCreator' element={<CharacterCreator />} />,
            <Route path='/CharacterDisplay' element={<CharacterDisplay />} />,
            <Route path='/CharacterUpdate' element={<CharacterUpdate />} />,
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/Spells' element={<Spells />} />
          </Routes>
        </main>
      </div>
    )
}

export default App;
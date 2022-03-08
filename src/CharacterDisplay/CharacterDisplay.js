import { useState } from "react";
import "./CharacterDisplay.css";

const CharacterDisplay = () => {
  const [charData, setCharData] = useState({});

  function getCharData() {
    fetch("http://localhost:4000/character/find/Austin")
      .then((res) => res.json())
      .then((data) => setCharData(data.Character))
      .catch((e) => console.log(e));
  }

  let charDataDisplay;
  if (charData.stats) {
    charDataDisplay = (
      <div className="border main-container">
        <div className="border name">
          <h3>{charData.name}</h3>
          <div>Character Name</div>
        </div>
        <div className="border char-info">
          <div className="char-info-class">Class: {charData.class}</div>
          <div className="char-info-level">Level: {charData.level}</div>
          <div className="char-info-race">Race: {charData.demographic}</div>
        </div>
        <div className="border ability-score">
          <div className="border ability">
            <div>Strength</div>
            <div>{charData.stats.strength}</div>
            <div className="modifier">
              +{Math.floor((charData.stats.strength - 10) / 2)}
            </div>
          </div>
          <div className="border ability">
            <div>Dexterity</div>
            <div>{charData.stats.dexterity}</div>
            <div className="modifier">
              +{Math.floor((charData.stats.dexterity - 10) / 2)}
            </div>
          </div>
          <div className="border ability">
            <div>Constitution</div>
            <div>{charData.stats.constitution}</div>
            <div className="modifier">
              +{Math.floor((charData.stats.constitution - 10) / 2)}
            </div>
          </div>
          <div className="border ability">
            <div>Intelligence</div>
            <div>{charData.stats.intelligence}</div>
            <div className="modifier">
              +{Math.floor((charData.stats.intelligence - 10) / 2)}
            </div>
          </div>
          <div className="border ability">
            <div>Wisdom</div>
            <div>{charData.stats.wisdom}</div>
            <div className="modifier">
              +{Math.floor((charData.stats.wisdom - 10) / 2)}
            </div>
          </div>
          <div className="border ability">
            <div>Charisma</div>
            <div>{charData.stats.charisma}</div>
            <div className="modifier">
              +{Math.floor((charData.stats.charisma - 10) / 2)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Character Display Page</h1>
      <button onClick={getCharData}>Get Character</button>
      {charDataDisplay}
    </div>
  );
};

export default CharacterDisplay;

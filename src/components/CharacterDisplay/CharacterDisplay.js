import { useState } from "react";
import "./CharacterDisplay.css";

const CharacterDisplay = () => {
  const [allChar, setAllChar] = useState([]);
  const [charData, setCharData] = useState({});

  function getCharData(name) {
    fetch("http://localhost:4000/character/find/" + name)
      .then((res) => res.json())
      .then((data) => setCharData(data.Character))
      .catch((e) => console.log(e));
  }

  function getAllChar() {
    fetch("http://localhost:4000/character/")
      .then((res) => res.json())
      .then((data) => setAllChar(data.Characters))
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
          <div className="char-info-hp">HP: {charData.stats.hp}</div>
        </div>
        <div className="border ability-score">
          <div className="border ability">
            <div>Strength</div>
            <div>{charData.stats.strength}</div>
            <div className="modifier">
              {charData.stats.strength >= 10
                ? "+" + Math.floor((charData.stats.strength - 10) / 2)
                : Math.floor((charData.stats.strength - 10) / 2)}
            </div>
          </div>
          <div className="border ability">
            <div>Dexterity</div>
            <div>{charData.stats.dexterity}</div>
            <div className="modifier">
              {charData.stats.dexterity >= 10
                ? "+" + Math.floor((charData.stats.dexterity - 10) / 2)
                : Math.floor((charData.stats.dexterity - 10) / 2)}
            </div>
          </div>
          <div className="border ability">
            <div>Constitution</div>
            <div>{charData.stats.constitution}</div>
            <div className="modifier">
              {charData.stats.constitution >= 10
                ? "+" + Math.floor((charData.stats.constitution - 10) / 2)
                : Math.floor((charData.stats.constitution - 10) / 2)}
            </div>
          </div>
          <div className="border ability">
            <div>Intelligence</div>
            <div>{charData.stats.intelligence}</div>
            <div className="modifier">
              {charData.stats.intelligence >= 10
                ? "+" + Math.floor((charData.stats.intelligence - 10) / 2)
                : Math.floor((charData.stats.intelligence - 10) / 2)}
            </div>
          </div>
          <div className="border ability">
            <div>Wisdom</div>
            <div>{charData.stats.wisdom}</div>
            <div className="modifier">
              {charData.stats.wisdom >= 10
                ? "+" + Math.floor((charData.stats.wisdom - 10) / 2)
                : Math.floor((charData.stats.wisdom - 10) / 2)}
            </div>
          </div>
          <div className="border ability">
            <div>Charisma</div>
            <div>{charData.stats.charisma}</div>
            <div className="modifier">
              {charData.stats.charisma >= 10
                ? "+" + Math.floor((charData.stats.charisma - 10) / 2)
                : Math.floor((charData.stats.charisma - 10) / 2)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  let allCharDisplay;
  if (allChar.length) {
    allCharDisplay = allChar.map((char, index) => {
      return (
        <button key={index} onClick={() => getCharData(char.name)}>
          {char.name}, lvl. {char.level}
        </button>
      );
    });
  }

  return (
    <div>
      <h1>Character Display Page</h1>
      <button onClick={getAllChar}>Get All Characters</button>
      <div>{allCharDisplay}</div>
      {charDataDisplay}
    </div>
  );
};

export default CharacterDisplay;

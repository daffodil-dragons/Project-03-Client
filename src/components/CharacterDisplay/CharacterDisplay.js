import { useState } from "react";
import "./CharacterDisplay.css";
import apiUrl from "../../apiUrl";

const CharacterDisplay = () => {
  const [allChar, setAllChar] = useState([]);
  const [charData, setCharData] = useState({});
  const [d20Num, setd20Num] = useState("");

  function getCharData(name) {
    fetch(apiUrl + "/character/find/" + name)
      .then((res) => res.json())
      .then((data) => setCharData(data.Character))
      .catch((e) => console.log(e));
  }

  function getAllChar() {
    fetch(apiUrl + "/character/")
      .then((res) => res.json())
      .then((data) => setAllChar(data.Characters))
      .catch((e) => console.log(e));
  }

  async function rolld20() {
    let timer = 25;
    let timeout = 5;
    while (timer > 0) {
      let num = Math.floor(Math.random() * 20 + 1);
      setd20Num(num);
      await new Promise((resolve) => setTimeout(resolve, timeout));
      if (timer > 20) {
        timeout += 5;
      } else if (timer > 10) {
        timeout += 10;
      } else if (timer > 5) {
        timeout += 20;
      } else {
        timeout++;
      }
      timer--;
    }
  }

  let charDataDisplay;
  if (charData.stats) {
    charDataDisplay = (
      <>
        <div className="d20">
          <button className="btn btn-light d20-btn" onClick={rolld20}>
            Roll d20!
          </button>
          <div className="number">{d20Num}</div>
        </div>
        <div className="border border-2 border-dark main-container">
          <div className="border border-secondary name">
            <h3>{charData.name}</h3>
            <div>Character Name</div>
          </div>
          <div className="border border-secondary char-info">
            <div className="char-info-class">Class: {charData.class}</div>
            <div className="char-info-level">Level: {charData.level}</div>
            <div className="char-info-race">Race: {charData.demographic}</div>
            <div className="char-info-hp">HP: {charData.stats.hp}</div>
          </div>
          <div className="border border-secondary ability-score">
            <div className="border ability">
              <div>Strength</div>
              <h4>
                {charData.stats.strength >= 10
                  ? "+" + Math.floor((charData.stats.strength - 10) / 2)
                  : Math.floor((charData.stats.strength - 10) / 2)}
              </h4>
              <div className="modifier">{charData.stats.strength}</div>
            </div>
            <div className="border ability">
              <div>Dexterity</div>
              <h4>
                {charData.stats.dexterity >= 10
                  ? "+" + Math.floor((charData.stats.dexterity - 10) / 2)
                  : Math.floor((charData.stats.dexterity - 10) / 2)}
              </h4>
              <div className="modifier">{charData.stats.dexterity}</div>
            </div>
            <div className="border ability">
              <div>Constitution</div>
              <h4>
                {charData.stats.constitution >= 10
                  ? "+" + Math.floor((charData.stats.constitution - 10) / 2)
                  : Math.floor((charData.stats.constitution - 10) / 2)}
              </h4>
              <div className="modifier">{charData.stats.constitution}</div>
            </div>
            <div className="border ability">
              <div>Intelligence</div>
              <h4>
                {charData.stats.intelligence >= 10
                  ? "+" + Math.floor((charData.stats.intelligence - 10) / 2)
                  : Math.floor((charData.stats.intelligence - 10) / 2)}
              </h4>
              <div className="modifier">{charData.stats.intelligence}</div>
            </div>
            <div className="border ability">
              <div>Wisdom</div>
              <h4>
                {charData.stats.wisdom >= 10
                  ? "+" + Math.floor((charData.stats.wisdom - 10) / 2)
                  : Math.floor((charData.stats.wisdom - 10) / 2)}
              </h4>
              <div className="modifier">{charData.stats.wisdom}</div>
            </div>
            <div className="border ability">
              <div>Charisma</div>
              <h4>
                {charData.stats.charisma >= 10
                  ? "+" + Math.floor((charData.stats.charisma - 10) / 2)
                  : Math.floor((charData.stats.charisma - 10) / 2)}
              </h4>
              <div className="modifier">{charData.stats.charisma}</div>
            </div>
          </div>
          <div className="border border-secondary spells">
            <h6>Spells</h6>
            <div className="accordion accordion-flush" id="accordionFlushExample">
              {charData.spells.map((spell, index) => {
                return (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`flush-heading${index}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`flush-collapse${index}`}
                      >
                        {spell.name},{" "}
                        {spell.level > 0 ? "lvl" + spell.level : "cantrip"}
                      </button>
                    </h2>
                    <div
                      id={`flush-collapse${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`flush-heading${index}`}
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">{spell.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }

  let allCharDisplay;
  if (allChar.length) {
    allCharDisplay = allChar.map((char, index) => {
      return (
        <button
          className="btn btn-secondary btn-sm"
          key={index}
          onClick={() => getCharData(char.name)}
        >
          {char.name}, lvl. {char.level}
        </button>
      );
    });
  }

  return (
    <div className="wrapper">
      <h1>Character Display Page</h1>
      <div className="get-char-container">
        <div className="get-all">
          <button className="btn btn-primary" onClick={getAllChar}>
            Get All Characters
          </button>
        </div>
        <div className="single-char">{allCharDisplay}</div>
      </div>
      {charDataDisplay}
    </div>
  );
};

export default CharacterDisplay;

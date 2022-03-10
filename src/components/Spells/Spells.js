import { useState } from "react";
import apiUrl from "../../apiUrl";

const Spells = () => {
  const [allSpells, setAllSpells] = useState([]);
  const [singleSpellData, setSingleSpellData] = useState({});
  const [charName, setCharName] = useState("");

  function handleChange(event) {
    setCharName(event.target.value);
  }

  function getAllSpells() {
    fetch(apiUrl + "/spells/")
      .then((res) => res.json())
      .then((data) => setAllSpells(data.spells))
      .catch((e) => console.log(e));
  }

  function getSingleSpellData(name) {
    fetch(apiUrl + "/spells/name/" + name)
      .then((res) => res.json())
      .then((data) => setSingleSpellData(data.spell))
      .catch((e) => console.log(e));
  }

  function addSpellToChar(event) {
    event.preventDefault();
    fetch(`${apiUrl}/character/update/${charName}/spell/${singleSpellData.name}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  }

  let allSpellsDisplay;
  if (allSpells[0]) {
    allSpellsDisplay = allSpells.map((spell, index) => {
      return (
        <div key={index}>
          <button onClick={() => getSingleSpellData(spell.name)}>
            {spell.name},{" "}
            {spell.level === 0 ? "cantrip" : spell.level + " level"}
          </button>
        </div>
      );
    });
  }

  let singleSpellDisplay;
  if (singleSpellData.name) {
    singleSpellDisplay = (
      <div>
        <h3>{singleSpellData.name}</h3>
        <h4>
          {singleSpellData.level === 0
            ? "cantrip"
            : singleSpellData.level + " level"}
        </h4>
        <p>{singleSpellData.description}</p>
        <form>
          <label>Add spell to character: </label>
          <input
            type="text"
            placeholder="character name"
            onChange={handleChange}
          />
          <button onClick={addSpellToChar}>Add Spell</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1>Spells Page</h1>
      <button onClick={getAllSpells}>Get All Spells</button>
      {allSpellsDisplay}
      {singleSpellDisplay}
    </div>
  );
};

export default Spells;

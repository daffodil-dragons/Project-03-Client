import { useState } from "react";
import apiUrl from "../../apiUrl";
import "./Spells.css";

const Spells = () => {
  const [allSpells, setAllSpells] = useState([]);
  const [singleSpellData, setSingleSpellData] = useState({});
  const [createSpellData, setCreateSpellData] = useState({
    name: "",
    level: 0,
    description: "",
    prepared: false,
  });
  const [charName, setCharName] = useState("");
  const [displayState, setDisplayState] = useState("");

  function handleChange(event) {
    setCharName(event.target.value);
  }

  function handleCreateChange(event) {
    if (event.target.id === "name") {
      setCreateSpellData({ ...createSpellData, name: event.target.value });
    } else if (event.target.id === "level") {
      setCreateSpellData({ ...createSpellData, level: event.target.value });
    } else if (event.target.id === "description") {
      setCreateSpellData({
        ...createSpellData,
        description: event.target.value,
      });
    }
  }

  function getAllSpells() {
    fetch(apiUrl + "/spells/")
      .then((res) => res.json())
      .then((data) => setAllSpells(data.spells))
      .catch((e) => console.log(e));
    changeDisplay("allSpells");
  }

  function getSingleSpellData(name) {
    fetch(apiUrl + "/spells/name/" + name)
      .then((res) => res.json())
      .then((data) => setSingleSpellData(data.spell))
      .catch((e) => console.log(e));
  }

  function addSpellToChar(event) {
    event.preventDefault();
    window.alert(`You added the spell ${singleSpellData.name} to ${charName}!`);
    fetch(
      `${apiUrl}/character/update/${charName}/spell/${singleSpellData.name}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then(() => setCharName(""))
      .catch((e) => console.log(e));
  }

  function changeDisplay(id) {
    if (id === "allSpells") {
      setDisplayState("allSpells");
    } else {
      setDisplayState("createSpell");
    }
  }

  function createSpell(event) {
    event.preventDefault();

    if (createSpellData.name !== "") {
      window.alert(`You have created the spell: ${createSpellData.name}!`);
      fetch(apiUrl + "/spells/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(createSpellData),
      })
        .then(() =>
          setCreateSpellData({
            name: "",
            level: 0,
            description: "",
            prepared: false,
          })
        )
        .catch((e) => console.log(e));
    } else {
      window.alert("You must enter a spell name!");
    }
  }

  async function deleteSpell() {
    window.alert(`You have deleted the spell: ${singleSpellData.name}!`);
    await fetch(apiUrl + "/spells/delete/" + singleSpellData.name, {
      method: "DELETE",
    })
      .then(() => setSingleSpellData({}))
      .catch((e) => console.log(e));
    getAllSpells();
  }

  let allSpellsDisplay;
  if (allSpells[0] && displayState === "allSpells") {
    allSpellsDisplay = allSpells.map((spell, index) => {
      return (
        <div className="all-spell-btns" key={index}>
          <button
            className="btn btn-light btn-sm"
            onClick={() => getSingleSpellData(spell.name)}
          >
            {spell.name},{" "}
            {spell.level === 0 ? "cantrip" : spell.level + " level"}
          </button>
        </div>
      );
    });
  }

  let singleSpellDisplay;
  if (singleSpellData.name && displayState !== "createSpell") {
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
            value={charName}
            onChange={handleChange}
          />
          <button className="btn btn-success btn-sm" onClick={addSpellToChar}>
            Add Spell
          </button>
          <button className="btn btn-danger btn-sm" onClick={deleteSpell}>
            Delete Spell
          </button>
        </form>
      </div>
    );
  }

  let createSpellDisplay;
  if (displayState === "createSpell") {
    createSpellDisplay = (
      <form className="create-spell">
        <label>Spell Name: </label>
        <input
          type="text"
          id="name"
          value={createSpellData.name}
          placeholder="name"
          onChange={handleCreateChange}
        />
        <br />
        <label>Spell Level: </label>
        <input
          type="number"
          id="level"
          value={createSpellData.level}
          placeholder="level"
          onChange={handleCreateChange}
        />
        <br />
        <label>Spell Description: </label>
        <textarea
          type="text"
          id="description"
          value={createSpellData.description}
          placeholder="description"
          onChange={handleCreateChange}
        ></textarea>
        <br />
        {/* <label>Prepared? </label>
        <label>True: </label>
        <input type="radio" id="preparedTrue" value={true} name="prepared" />
        <label>False: </label>
        <input type="radio" id="preparedFalse" value={false} name="prepared" /> */}
        <button className="btn btn-success btn-sm" onClick={createSpell}>
          Create Spell
        </button>
      </form>
    );
  }

  return (
    <div className="wrapper">
      <h1>Spells Page</h1>
      <button
        className="btn btn-secondary"
        id="createSpell"
        onClick={() => changeDisplay("createSpell")}
      >
        Create A Spell
      </button>
      <button className="btn btn-primary" id="allSpells" onClick={getAllSpells}>
        Get All Spells
      </button>
      {allSpellsDisplay}
      {singleSpellDisplay}
      {createSpellDisplay}
    </div>
  );
};

export default Spells;

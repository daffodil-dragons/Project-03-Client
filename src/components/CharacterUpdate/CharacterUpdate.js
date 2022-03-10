import React from "react";
import { useState } from "react";
import './CharacterUpdate.css';

function CharacterUpdate() {
  const [page, setpage] = useState(1);
  const [data, setData] = useState({
    name: "",
    demographic: "",
    class: "",
    level: "",
    stats: {
      hp: 0,
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    },
  });
  const [searchName, setSearchName] = useState("");

  //buttons for going back and forward through menu
  function goBackPage() {
    if (page === 1) return;
    setpage((page) => page - 1);
  }
  function goNextPage() {
    if (page === 5) return;
    setpage((page) => page + 1);
  }

  //function to update data useState
  function updateData(event) {
    if (event.target.id === "name") {
      setData({ ...data, name: event.target.value });
    } else if (event.target.id === "demographic") {
      setData({ ...data, demographic: event.target.value });
    } else if (event.target.id === "class") {
      setData({ ...data, class: event.target.value });
    } else if (event.target.id === "level") {
      setData({ ...data, level: event.target.value });
    } else if (event.target.id === "hp") {
      setData({ ...data, stats: { ...data.stats, hp: event.target.value } });
    } else if (event.target.id === "strength") {
      setData({
        ...data,
        stats: { ...data.stats, strength: event.target.value },
      });
    } else if (event.target.id === "dexterity") {
      setData({
        ...data,
        stats: { ...data.stats, dexterity: event.target.value },
      });
    } else if (event.target.id === "constitution") {
      setData({
        ...data,
        stats: { ...data.stats, constitution: event.target.value },
      });
    } else if (event.target.id === "intelligence") {
      setData({
        ...data,
        stats: { ...data.stats, intelligence: event.target.value },
      });
    } else if (event.target.id === "wisdom") {
      setData({
        ...data,
        stats: { ...data.stats, wisdom: event.target.value },
      });
    } else if (event.target.id === "charisma") {
      setData({
        ...data,
        stats: { ...data.stats, charisma: event.target.value },
      });
    }
  }

  function handleChange(event) {
    setSearchName(event.target.value);
  }

  //function to post to the API
  function submit() {
    fetch("http://localhost:4000/character/update/" + searchName, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() =>
        setData({
          name: "",
          demographic: "",
          class: "",
          level: "",
          stats: {
            hp: 0,
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
          },
        })
      )
      .then(() => setSearchName(""))
      .catch((e) => console.log(e));
  }

  function findChar(event) {
    event.preventDefault();
    fetch("http://localhost:4000/character/find/" + searchName)
      .then((res) => res.json())
      .then((data) => setData(data.Character))
      .catch((e) => console.log(e));
  }

  function deleteChar() {
    window.alert(`You deleted the character: ${searchName}!`);
    fetch("http://localhost:4000/character/delete/" + searchName, {
      method: "DELETE",
    })
      .then(() =>
        setData({
          name: "",
          demographic: "",
          class: "",
          level: "",
          stats: {
            hp: 0,
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
          },
        })
      )
      .then(() => setSearchName(""))
      .catch((e) => console.log(e));
  }

  // function verify() {
  //     window.alert("Please confirm your deletion");
  //     if (true) {
  //          deleteChar()
  //     } else {
  //          console.log('aborted');
  //     }
  // }

  /*****************************
   *        MAIN RETURN         *
   *****************************/
  return (
    <div className="App">
      <div className="header"><h1>Update Character</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          value={searchName}
          onChange={handleChange}
        />
        <button className="btn btn-primary" onClick={findChar}>Find Character By Name</button>
      </form>
      </div>
      {/* Progress Bar here */}
      {/* <div>
        <progress max="5" value={page} />
      </div> */}

      {/* {page !== 1 && <button onClick={goBackPage}>Back</button>}
      {page !== 5 && <button onClick={goNextPage}>Next</button>} */}
      <div className="statUpdates">
          <div className="sButton">{
        <button type="submit" className="btn btn-success" onClick={submit}>
          Submit
        </button>
      }</div>
    <div className="statContainer">
      {/*Content Here */}
      {/* {page === 1 && <OnboardingOne data={data} update={updateData} />} */}
      {/* {page === 2 && <OnboardingTwo data={data} update={updateData} />} */}
      <div className="demoStats">
        {<OnboardingThree data={data} update={updateData} />}
        {<OnboardingFour data={data} update={updateData} />}
      </div>
      <div className="statStats">
      {<OnboardingFive data={data} update={updateData} />}
      </div>
    </div>
      </div>

      <div className="delete">
        <h1>Delete Character</h1>
        <button className="btn btn-danger" onClick={deleteChar}>Delete</button>
      </div>
    </div>
  );
}

export default CharacterUpdate;

/*****************************
 *        COMPONENTS          *
 *****************************/

//component for name
function OnboardingOne({ data, update }) {
  return (
    <div>
      <form>
        Please enter your character's name:
        <input type="text" id="name" value={data.name} onChange={update} />
      </form>
    </div>
  );
}

//component for race
function OnboardingTwo({ data, update }) {
  return (
    <div>
      <form>
        Please enter your character's race:
        <input
          type="text"
          id="demographic"
          value={data.demographic}
          onChange={update}
        />
      </form>
    </div>
  );
}
//component for class
function OnboardingThree({ data, update }) {
  return (
    <div>
      <form>
        Please enter your character's class:
        <input type="text" id="class" value={data.class} onChange={update} />
      </form>
    </div>
  );
}
//component for background
function OnboardingFour({ data, update }) {
  return (
    <div>
      <form>
        Please enter your character's level:
        <input type="number" id="level" value={data.level} onChange={update} />
      </form>
    </div>
  );
}
//component for stats
function OnboardingFive({ data, update }) {
  return (
    <div>
      <form>
        <div className="title">Please enter your character's stats:</div>
    <div className="statNames">
        <div className="hp">
          HP:{" "}
          <input
            type="number"
            id="hp"
            value={data.stats.hp}
            onChange={update}
          />
        </div>
        <div className="strength">
          Strength:
          <input
            type="number"
            id="strength"
            value={data.stats.strength}
            onChange={update}
          />
        </div>
        <div className="dexterity">
          Dexterity:
          <input
            type="number"
            id="dexterity"
            value={data.stats.dexterity}
            onChange={update}
          />
        </div>
        <div className="constitution">
          Constitution:{" "}
          <input
            type="number"
            id="constitution"
            value={data.stats.constitution}
            onChange={update}
          />
        </div>
        <div className="intelligence">
          Intellgience:{" "}
          <input
            type="number"
            id="intelligence"
            value={data.stats.intelligence}
            onChange={update}
          />
        </div>
        <div className="wisdom">
          Wisdom:{" "}
          <input
            type="number"
            id="wisdom"
            value={data.stats.wisdom}
            onChange={update}
          />
        </div>
        <div className="charisma">
          Charisma:{" "}
          <input
            type="number"
            id="charisma"
            value={data.stats.charisma}
            onChange={update}
          />
        </div>
    </div>
      </form>
    </div>
  );
}

import { useState } from "react";
import * as bootstrap from "bootstrap";
import "./CharacterUpdate.css";
import apiUrl from "../../apiUrl";

function CharacterUpdate() {
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

  //function to update to the API
  function submit() {
    fetch(apiUrl + "/character/update/" + searchName, {
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

  function triggerModal() {
    let myModal = new bootstrap.Modal(document.getElementById("warningModal"));
    myModal.toggle();
  }

  function findChar(event) {
    event.preventDefault();

    if (searchName !== "") {
      fetch(apiUrl + "/character/find/" + searchName)
        .then((res) => res.json())
        .then((data) => {
          data.Character !== null ? setData(data.Character) : triggerModal();
        })
        .catch((e) => console.log(e));
    }
  }

  function deleteChar() {
    fetch(apiUrl + "/character/delete/" + searchName, {
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
      .catch((e) => console.log(e));
  }

  /*****************************
   *        MAIN RETURN         *
   *****************************/
  return (
    <div className="App">
      <div className="header">
        <h1>Update Character</h1>
        <form>
          <input
            type="text"
            placeholder="name"
            value={searchName}
            onChange={handleChange}
          />
          <button
            className="btn btn-primary"
            // data-bs-toggle="modal"
            // data-bs-target={data.name === null ? "#warningModal" : ""}
            onClick={findChar}
          >
            Find Character By Name
          </button>
        </form>
      </div>
      <div className="statUpdates">
        <div className="sButton">
          {
            <button type="submit" className="btn btn-success" onClick={submit}>
              Submit
            </button>
          }
        </div>
        <div className="statContainer">
          <div className="demoStats">
            {<OnboardingThree data={data} update={updateData} />}
            {<OnboardingFour data={data} update={updateData} />}
          </div>
          <div className="statStats">
            {<OnboardingFive data={data} update={updateData} />}
          </div>
        </div>
      </div>

      {/* WARNING MODAL */}
      <div
        className="modal fade"
        id="warningModal"
        tabIndex="-1"
        aria-labelledby="warningModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="warningModalLabel">
                Warning!
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Unable to find that character's name!
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      <div
        className="modal fade"
        id="successModal"
        tabIndex="-1"
        aria-labelledby="successModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="successModalLabel">
                Deleted!
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setSearchName("")}
              ></button>
            </div>
            <div className="modal-body">{`You deleted the character: ${searchName}!`}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => setSearchName("")}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="delete">
        <h1>Delete Character</h1>
        <button
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#successModal"
          onClick={deleteChar}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CharacterUpdate;

/*****************************
 *        COMPONENTS          *
 *****************************/

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

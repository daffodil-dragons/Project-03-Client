import React from "react";
import { useState } from "react";
import "./CharacterCreator.css";
import apiUrl from "../../apiUrl";

function CharacterCreator() {
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

  //function to post to the API
  function submit() {
    if (data.name === "") {
      setpage(1);
    } else {
      fetch(apiUrl + "/character/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(() => setpage(1))
        .catch((e) => console.log(e));
    }
  }

  /*****************************
   *        MAIN RETURN         *
   *****************************/
  return (
    <div className="cc">
      {/* Progress Bar here */}
      <div className="progress" style={{ height: 50 }}>
        <div
          className="progress-bar bg-info"
          role="progressbar"
          style={{ width: `${page}` * 20 + "%" }}
          aria-valuenow={`${page}`}
          aria-valuemin="0"
          aria-valuemax="5"
        ></div>
      </div>

      {/*Buttons here*/}
      {page !== 1 && (
        <button id="back" className="btn btn-primary" onClick={goBackPage}>
          Back
        </button>
      )}
      {page !== 5 && (
        <button id="next" className="btn btn-primary" onClick={goNextPage}>
          Next
        </button>
      )}
      {page === 5 && (
        <button
          id="submit"
          type="submit"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target={data.name === "" ? "#warningModal" : "#successModal"}
          onClick={submit}
        >
          Submit
        </button>
      )}

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
            <div className="modal-body">Your character needs a name!</div>
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
                Success!
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() =>
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
                }
              ></button>
            </div>
            <div className="modal-body">{`You have created the character: ${data.name}!`}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={() =>
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
                }
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Content Here */}
      <section id="main">
        {page === 1 && <OnboardingOne data={data} update={updateData} />}
        {page === 2 && <OnboardingTwo data={data} update={updateData} />}
        {page === 3 && <OnboardingThree data={data} update={updateData} />}
        {page === 4 && <OnboardingFour data={data} update={updateData} />}
        {page === 5 && <OnboardingFive data={data} update={updateData} />}
      </section>
    </div>
  );
}

export default CharacterCreator;

/*****************************
 *        COMPONENTS          *
 *****************************/

//component for name
function OnboardingOne({ data, update }) {
  return (
    <div>
      <form className="form">
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
      <form className="form">
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
      <form className="form">
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
      <form className="form">
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
      <form className="form">
        Please enter your character's stats:
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
      </form>
    </div>
  );
}

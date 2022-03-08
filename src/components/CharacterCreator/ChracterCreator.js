import React  from "react";
import { useState } from "react";
// import {Routes, Link, Route} from 'react-router-dom'

function CharacterCreator() {
    const [page, setpage] = useState(1);
    const [data, setData] = useState({
      name: " ",
      demographic: " ",
      class: " ",
      level: " ",
      stats: {
        hp: 0,
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
      }
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
        setData({...data, class: event.target.value });
      } else if (event.target.id === "level") {
        setData({...data, level: event.target.value,});
      } else if (event.target.id === "hp") {
        setData({...data, stats: {...data.stats, hp: event.target.value}});
      } else if (event.target.id === "strength") {
        setData({...data, stats: {...data.stats, strength: event.target.value}});
      } else if (event.target.id === "dexterity") {
        setData({...data, stats: {...data.stats, dexterity: event.target.value}});
      } else if (event.target.id === "constitution") {
        setData({...data, stats: {...data.stats, constitution: event.target.value}});
      } else if (event.target.id === "intelligence") {
        setData({...data, stats: {...data.stats, intelligence: event.target.value}});
      } else if (event.target.id === "wisdom") {
        setData({...data, stats: {...data.stats, wisdom: event.target.value}});
      } else if (event.target.id === "charisma") {
        setData({...data, stats: {...data.stats, charisma: event.target.value}});
      }
    }


    //function to post to the API
    function submit() {
      fetch("http://localhost:4000/character/create", 
      { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(data) })
      .catch((e) => console.log(e));
    }
  
   /*****************************
   *        MAIN RETURN         *
   *****************************/
  return (
    <div className="App">
      {/* Progress Bar here */}
      <div>
        <progress max="5" value={page} />
      </div>

      {page !== 1 && (
        <button onClick={goBackPage}>
          Back
        </button>
      )}
      {page !== 5 && (
        <button onClick={goNextPage}>
          Next
        </button>
      )}
      {page === 5 && (
        <button type="submit" onClick={submit}>
          Submit
        </button>
      )}

      {/*Content Here */}
      {page === 1 && <OnboardingOne data={data} update={updateData}/>}
      {page === 2 && <OnboardingTwo data={data} update={updateData} />}
      {page === 3 && <OnboardingThree data={data} update={updateData} />}
      {page === 4 && <OnboardingFour data={data} update={updateData} />}
      {page === 5 && <OnboardingFive data={data} update={updateData} />}
    </div>
  );
}

export default CharacterCreator;

/*****************************
 *        COMPONENTS          *
 *****************************/

//component for name
function OnboardingOne({data, update}) {
  return (
    <div>
      <form>
        Please enter your character's name:
        <input type="text" id="name" value={data.name} onChange={update}/>
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
        <input type="text" id="demographic" value={data.demographic} onChange={update} />
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
        <input type="text" id="class" value={data.class} onChange={update}/>
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
        <input type="number" id="level" value={data.level} onChange={update}/>
      </form>
    </div>
  );
}
//component for stats
function OnboardingFive({data, update}) {
  return (
    <div>
      <form>
        Please enter your character's stats:
        <div className="hp">
          HP: <input type="number" id="hp" value={data.stats.hp} onChange={update}/>
        </div>
        <div className="strength">
          Strength:<input type="number" id="strength" value={data.stats.strength} onChange={update}/>
        </div>
        <div className="dexterity">
          Dexterity:<input type="number" id="dexterity" value={data.stats.dexterity} onChange={update}/>
        </div>
        <div className="constitution">
          Constitution: <input type="number" id="constitution" value={data.stats.constitution} onChange={update}/>
        </div>
        <div className="intelligence">
          Intellgience: <input type="number" id="intelligence" value={data.stats.intelligence} onChange={update}/>
        </div>
        <div className="wisdom">
          Wisdom: <input type="number" id="wisdom" value={data.stats.wisdom} onChange={update}/>
        </div>
        <div className="charisma">
          Charisma: <input type="number" id="charisma" value={data.stats.charisma} onChange={update}/>
        </div>
      </form>
    </div>
  )
}
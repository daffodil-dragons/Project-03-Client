import React  from "react";
import { useState } from "react";
// import {Routes, Link, Route} from 'react-router-dom'

function CharacterCreator() {
    const [page, setpage] = useState(1);
    const [data, setData] = useState({
      name: " ",
      demographic: " ",
      class: " ",
      level: " "
    });
  
    //buttons for going back and forward through menu
    function goBackPage() {
      if (page === 1) return;
      setpage((page) => page - 1);
    }
    function goNextPage() {
      if (page === 4) return;
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
      } 
    }


    //function to post to the API
    function submit() {
      fetch("api/form", { method: "POST", body: JSON.stringify(data) });
    }
  
   /*****************************
   *        MAIN RETURN         *
   *****************************/
  return (
    <div className="App">
      {/* Progress Bar here */}
      <div>
        <progress max="4" value={page} />
      </div>

      {page !== 1 && (
        <button onClick={goBackPage}>
          Back
        </button>
      )}
      {page !== 4 && (
        <button onClick={goNextPage}>
          Next
        </button>
      )}
      {page === 4 && (
        <button type="submit" onClick={submit}>
          Submit
        </button>
      )}

      {/*Content Here */}
      {page === 1 && <OnboardingOne data={data} update={updateData}/>}
      {page === 2 && <OnboardingTwo data={data} update={updateData} />}
      {page === 3 && <OnboardingThree data={data} update={updateData} />}
      {page === 4 && (
        <OnboardingFour data={data} update={updateData} />
      )}
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
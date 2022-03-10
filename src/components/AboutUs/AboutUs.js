//dependencies
import React  from "react";
import aboutUsData from "./aboutUsData";
import './AboutUs.css';

function AboutUs() {
    let teammates = aboutUsData.map((person, key) => {
        return (
            <div className="member">
                <h1 className="person">{person.name}</h1>
                <p>{person.text}</p>
                <a href={person.github} className="github">Github</a>
                <a href={person.linkedIn} className="linkedIn">LinkedIn</a>
            </div>
        )
    })

    return (
        <div className="about">
            <section>
                {teammates}
            </section>
        </div>
    )
}

export default AboutUs;
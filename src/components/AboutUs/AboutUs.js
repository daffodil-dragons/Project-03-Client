//dependencies
import React  from "react";
import aboutUsData from "./aboutUsData"
import './AboutUs.css';

function AboutUs() {
    let teammates = aboutUsData.map((person, key) => {
        return (
            <div className="member">
                <h1>{person.name}</h1>
                <div>{person.github}</div>
                {person.linkedIn}
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
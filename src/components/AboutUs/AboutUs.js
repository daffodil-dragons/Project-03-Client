//dependencies
import React  from "react";
import aboutUsData from "./aboutUsData"
import './AboutUs.css';

function AboutUs() {
    let teammates = aboutUsData.map((person, key) => {
        return (
            <div className="member">
                {person.name}
                {person.email}
                {person.github}
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
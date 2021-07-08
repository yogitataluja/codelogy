import React from 'react'
import Section from './Section'
import about from './imges/About.svg'
const About = () => {
    return (
        <div>
            <Section slogn="Welcome to About page" imgsrc={about} visit="/contact"  btname="Contact Now"/>
        </div>
    )
}

export default About

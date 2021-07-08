import React from 'react'
import homimg from '../src/imges/home.svg'
import Section from './Section'


const Home = () => {
    return (
        <div className="mb-4">
            <Section slogn="Grow your business with" imgsrc={homimg} visit="./services" btname="Get Started"/>
        </div>
    )
}

export default Home

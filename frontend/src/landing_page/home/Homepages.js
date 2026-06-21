import  React from 'react';
import Hero from"./Hero.js";
import Awards from './awards';
import Stats from './stats';
import Pricing from './pricing';
import Education from './Education.js';
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';
import OpenAccount from '../OpenAcount.js';


function Homepages() {
    return ( 
        <>
        
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        
        <OpenAccount />
        

        </>
    );
}

export default Homepages;


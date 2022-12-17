import React from 'react';
import { Banner } from "../components/Banner";
import { Hyperloop } from "../components/Hyperloop";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

function LandingPage() {
    return (
        <div id='LandingPage'>         
      <Banner />
      <Hyperloop />
      <About /> 
      <Contact />
        </div>
    );
}

export default LandingPage;
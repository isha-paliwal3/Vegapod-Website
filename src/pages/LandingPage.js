import React from 'react';
import { Banner } from "../components/Banner";
import { Hyperloop } from "../components/Hyperloop";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
function LandingPage() {
    return (
        <>       
      <Banner />
      <Hyperloop />
      <About /> 
      <Contact />
        </>
    );
}

export default LandingPage;
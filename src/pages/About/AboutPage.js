import React from 'react';
import '../../components/Partners.css'
import Partners from '../../components/Partners';

function AboutPage() {
    return (
    <section className='sponser' id='sponser' style={{background:'white'}}>
        <section className="section-sponser">
                <Partners/>
        </section>
    </section>
    );
}

export default AboutPage;
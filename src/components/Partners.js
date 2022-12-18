import React from 'react'
import P1 from '../assets/img/Sponser/s1.png';
import P2 from '../assets/img/Sponser/s2.png';
import P3 from '../assets/img/Sponser/s3.png';
import P4 from '../assets/img/Sponser/s4.png';
import P5 from '../assets/img/Sponser/s5.png';
import P6 from '../assets/img/Sponser/s6.png';
import P7 from '../assets/img/Sponser/s7.png';
import P8 from '../assets/img/Sponser/s8.png';
import P9 from '../assets/img/Sponser/s9.png';
import P10 from '../assets/img/Sponser/s10.png';
import P11 from '../assets/img/Sponser/s11.png';
import P12 from '../assets/img/Sponser/s12.png';
import P13 from '../assets/img/Sponser/s13.png';
import P14 from '../assets/img/Sponser/s14.png';
import P15 from '../assets/img/Sponser/s15.png';
import P16 from '../assets/img/Sponser/s16.png';
import P17 from '../assets/img/Sponser/s17.png';



const Sponsers = [
    {
        id: 1,
        img: P1,
        
    },
    {
        id: 2,
        img: P2,
    },
    {
        id: 3,
        img: P3,
    },
    {
        id: 4,
        img: P4,
    },
    {
        id: 5,
        img: P5,
    },
    {
        id: 6,
        img: P6,
    },
    {
        id: 7,
        img: P7,
    },
    {
        id: 8,
        img: P8,
    },
    {
        id: 9,
        img: P9,
    },
    {
        id: 10,
        img: P10,

    },
    {
        id: 11,
        img: P11,
    },
    {
        id: 12,
        img: P12,
    },
    {
        id: 13,
        img: P13,

    },
    {
        id: 14,
        img: P14,
    },
    {
        id: 15,
        img: P15,
    },
    {
        id: 16,
        img: P16,

    },
    {
        id: 17,
        img: P17,
    },

]

const SponserMembers = props => {
    return (
        <>
           <div className="col-sm-6 col-lg-4 col-xl-3">
                        <img src={props.sponser.img} alt="SponserImg" />
            </div>
        </>
    );
};

export default function Partners() {
  return (
    <div>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="header-section">
                            <h3 className="title">Our Partners</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Sponsers.map(sponser => {
                        return <SponserMembers sponser={sponser} key={sponser.id} />;
                    })}
                </div>
            </div>

    </div>
  )
}

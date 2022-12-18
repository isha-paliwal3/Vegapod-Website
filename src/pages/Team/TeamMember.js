import React from 'react'
import Founder1 from '../../assets/img/Team/founder1.webp';
import Founder2 from '../../assets/img/Team/founder2.webp';
import User from '../../assets/img/Team/user.png';
import Captain from '../../assets/img/Team/Captain.png';
import M1 from '../../assets/img/Team/Rutwik Kute.png';
import M2 from '../../assets/img/Team/Sanchit Divadkar.png';
import M3 from '../../assets/img/Team/Chaitanya Sahasrabudhe.png';
import M4 from '../../assets/img/Team/Shivangi Singh.png';
import M5 from '../../assets/img/Team/Rupesh Verma.png';
import M6 from '../../assets/img/Team/Achintya Chaware.png';
import M7 from '../../assets/img/Team/Vivek Girgaonkar.png';
import M8 from '../../assets/img/Team/Arkoday Basak.png';
import M9 from '../../assets/img/Team/Shubham Gandhi.png';
import M10 from '../../assets/img/Team/Daman Chakraborty.png';
import M11 from '../../assets/img/Team/Manan Makhija.png';
import M12 from '../../assets/img/Team/Shubham Gite.png';

const Founders = [
    {
        id: 1,
        img: Founder1,
        Fname: "Pranay Luniya",
    },
    {
        id: 2,
        img: Founder2,
        Fname: "Kartik Kulkarni",
    },
    {
        id: 3,
        img: User,
        Fname: "xyz",
    },
    {
        id: 4,
        img: User,
        Fname: "xyz",
    },
]


const CMembers = [
    {
        id: 1,
        img: M1,
        Mname: "Rutwik Kute",
        dept: "Event Manager",
    },
    {
        id: 2,
        img: M2,
        Mname: "Sanchit Divadkar",
        dept: "Vice Captain",
    },
    {
        id: 3,
        img: M3,
        Mname: "Chaitanya Sahasrabudhe",
        dept: "Vice Captain",
    },
    {
        id: 4,
        img: M4,
        Mname: "Shivangi Singh",
        dept: "Structures Head",
    },
    {
        id: 5,
        img: M5,
        Mname: "Rupesh Verma",
        dept: "Power Systems Head",
    },
    {
        id: 6,
        img: M6,
        Mname: "Achintya Chaware",
        dept: "Electronics and Navigation Head",
    },
    {
        id: 7,
        img: M7,
        Mname: "Vivek Girgaonkar",
        dept: "Propulsion Head",
    },
    {
        id: 8,
        img: M8,
        Mname: "Arkoday Basak",
        dept: "Braking Head",
    },
    {
        id: 9,
        img: M9,
        Mname: "Shubham Gandhi",
        dept: "Assistant Manager",
    },
    {
        id: 10,
        img: M10,
        Mname: "Daman Chakraborty",
        dept: "Media Production Co-Head",

    },
    {
        id: 11,
        img: M11,
        Mname: "Manan Makhija",
        dept: "Media Production Co-Head",
    },
    {
        id: 12,
        img: M12,
        Mname: "Shubham Gite",
        dept: "Logistics Head",
    },
]

const FounderMembers = props => {
    return (
        <>
            <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="single-person">
                    <div className="person-image">
                        <img src={props.founder.img} alt="founderImg" />
                    </div>
                    <div className="person-info">
                        <h3 className="full-name">{props.founder.Fname}</h3>
                    </div>
                </div>
            </div>
        </>
    );
};


const CommitteeMembers = props => {
    return (
        <>
            <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="single-person">
                    <div className="person-image">
                        <img src={props.committee.img} alt="MemberImg" />
                    </div>
                    <div className="person-info">
                        <h5 className="full-name">{props.committee.Mname} </h5>
                        <h4 className="department">{props.committee.dept}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function TeamMember() {
    return (
        <>
            {/* Founders */}
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="header-section">
                            <h3 className="title">Our Founders</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Founders.map(founder => {
                        return <FounderMembers founder={founder} key={founder.id} />;
                    })}
                </div>
            </div>

            {/* Captain */}
            <div className="container" >
                <div className="row justify-content-center text-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="header-section" style={{ marginTop: '50px' }}>
                            <h3 className="title">Our Captain</h3>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ justifyContent: 'center' }}>
                    <div className="col-sm-6 col-lg-4 col-xl-3 align-item-center text-center">
                        <div className="single-person">
                            <div className="person-image">
                                <img src={Captain} alt="" />
                            </div>
                            <div className="person-info">
                                <h3 className="full-name">Purnesh Jain</h3>
                                <h4 className="department">Captain</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Committee */}
            <div className="container" >
                <div className="row justify-content-center text-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="header-section" style={{ marginTop: '50px' }}>
                            <h3 className="title">Our Committee</h3>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ justifyContent: 'center' }}>
                {CMembers.map(committee => {
                        return <CommitteeMembers committee={committee} key={committee.id} />;
                    })}
                </div>
            </div>
        </>
    );
}

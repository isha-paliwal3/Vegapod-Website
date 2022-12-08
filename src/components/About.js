import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { AboutCard } from "./AboutCard";
  
import G1 from "../assets/img/Gallery/G1.jpeg";
import G2 from "../assets/img/Gallery/G2.jpg";
import G3 from "../assets/img/Gallery/G3.jpg";
import G4 from "../assets/img/Gallery/G4.jpg";
import G5 from "../assets/img/Gallery/G5.jpg";
import G6 from "../assets/img/Gallery/G6.png";

import Department1 from '../assets/img/Department/department1.png';
import Department2 from '../assets/img/Department/department2.png';
import Department3 from '../assets/img/Department/department3.png';
import Department4 from '../assets/img/Department/department4.png';
import Department5 from '../assets/img/Department/department5.png';
import Department6 from '../assets/img/Department/department6.png';

// import A1 from '../assets/img/Achievement/A1.png';
// import A2 from '../assets/img/Achievement/A2.png';
// import A3 from '../assets/img/Achievement/A3.png';
// import A4 from '../assets/img/Achievement/A4.png';
// import A5 from '../assets/img/Achievement/A5.png';
// import A6 from '../assets/img/Achievement/A6.png';


import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {

  const Department = [
    {
      title: "Technical Department",
      description: "PROPULSION AND LEVITATION",
      imgUrl: Department1,
    },
    {
      title: "Technical Department",
      description: "CONTROL AND NAVIGATION",
      imgUrl: Department2,
    },
    {
      title: "Technical Department",
      description: "BRAKING",
      imgUrl: Department3,
    },
    {
      title: "Technical Department",
      description: "STRUCTURE AND STABILITY",
      imgUrl: Department4,
    },
    {
      title: "Marketing Department",
      description: "Design & Development",
      imgUrl: Department5,
    },
    {
      title: "Finance Department",
      description: "Sponsership",
      imgUrl: Department6,
    },
  ];

  const Gallery = [
    {
      imgUrl: G1,
    },
    {
      imgUrl: G2,
    },
    {
      imgUrl: G3,
    },
    {
      imgUrl: G4,
    },
    {
      imgUrl: G5,
    },
    {
      imgUrl: G6,
    },
  ];

  
  // const Achievement = [
  //   {
  //     imgUrl: A1,
  //     description: "Tested first prototype at 75km/hr on 50 meter track",
  //   },
  //   {
  //     imgUrl: A2,
  //     description: "Among Top 5 to showcase the commercial feasibility of Hyperloop in India during European Hyperloop Week",
  //   },
  //   {
  //     imgUrl: A3,
  //     description: "Top three in Asia and top 30 out of 1600 plus teams worldwide in SpaceX 2019 competition.",
  //   },
  //   {
  //     imgUrl: A4,
  //     description: "First Indian team to manufacture and test a Linear Induction motor.",
  //   },
  //   {
  //     imgUrl: A5,
  //     description: "STRUCTURE AND STABILITY",
  //   },
  //   {
  //     imgUrl: A6,
  //     description: "STRUCTURE AND STABILITY",
  //   },
  // ];

  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>About Us</h2>
                  <p>Team Vegapod is an undergraduate student team driven from MIT World peace
                    University, which is working towards the scalability of hyper loop technology. We mainly
                    focus on building and manufacturing sub - scale hyper loop prototypes and compete in
                    various competitions and conferences globally</p>
                  <Tab.Container id="About-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Departments</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="about_gal" eventKey="second">Gallery</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Achievements</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            Department.map((about, index) => {
                              return (
                                <AboutCard
                                  key={index}
                                  {...about}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            Gallery.map((about, index) => {
                              return (
                                <AboutCard
                                  key={index}
                                  {...about}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {/* {
                            Achievement.map((about, index) => {
                              return (
                                <AboutCard
                                  key={index}
                                  {...about}
                                />
                              )
                            })
                          } */}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

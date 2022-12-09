import React from "react";
import "./eventCard.css";
import E1 from '../../assets/img/Events/E1.jpg';
import E2 from '../../assets/img/Events/E2.jpg';
import E3 from '../../assets/img/Events/E3.jpg';
import E4 from '../../assets/img/Events/E4.jpg';
import E5 from '../../assets/img/Events/E5.jpg';

const Events = [
  {
    id: 1,
    img: E1,
    name: "UGC 2022",
    desc: "University Grants Commision visited MIT-WPU  for its yearly survey where Team Vegapod Hyperloop presented their subscale prototype ‘BOSE’ and briefed students from MIT-WPU and various officials and government officials about our future plans and vision.",
  },
  {
    id: 2,
    img: E2,
    name: "Texephyr 2022",
    desc: "",
  },
  {
    id: 3,
    img: E3,
    name: "EHW 2022",
    desc: "The European Hyperloop Week is an annual international event dedicated to the 'transport of the future', the Hyperloop. Our team was a part of Student Panel discussion held there. Also, also showcased the world our pod prototype and holding a position as one of the most cost effecient pods worldwide.",
  },
  {
    id: 4,
    img: E4,
    name: "RIDE 2022",
    desc: "MITWPU hosted RIDE, an event which was held from 20-24 September 2022. We participated actively by showcasing our club and further explained our vision and current events going on to people who visited us.We also prepared a design model which comprised of a mould for Vikram, the pod which represented India in EHW.",
  },
  {
    id: 5,
    img: E5,
    name: "Sustain 3.0",
    desc: "Sustain 3.0 was a event organised by Team Shunya  , IIT-B focused on promoting teams and startups working towards various technical sustainable products. Team Vegapod was invited to present our work on Hyperloop subsystems and how do we plan to make Hyperloop a safer, sustainable and scalable mode of transportation.",
  },
  {
    id: 6,
    img: E2,
    name: "Canadian Hyperloop Conference",
    desc: "",
  },

];

const EventListItem = props => {
  return (
    <div className="eventItems">
      <div className="event-card-container" >
        <div className="first">
        <img lassName="event-img-container" src={props.event.img} alt="eventImg"></img> 
        <p className="event-name-container" style={{marginTop: "20%"}}>
          <strong>{props.event.name}</strong>
        </p>
        </div>
        <div className="second">
        <p>{props.event.desc}</p>
        </div>
        
      </div>
      </div>
  );
};

const EventList = () => {
  return (
    <div className="Event-cotainer">
      {Events.map(event => {
        return <EventListItem event={event} key={event.id} />;
      })}
    </div>
  );
};

export default EventList;
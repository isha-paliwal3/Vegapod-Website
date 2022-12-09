import React from 'react'
import "./Event.css"
import EventList from "./EventList.js";

export default function EventPage() {
    return (
        <>
            <section className='event' id='' style={{ background: 'white' }}>
                <div className='eventBanner'>
                        <h1 id="Heading" style={ {color:"#fff" }}>OUR EVENTS</h1>
                </div>

                <p className='eventDescription' id="event_para">Team Vegapod Hyperloop has being collaborating with various committees and participating in their events and competitions as a prime contributor. We are also planning technical workshops, awareness programmes and events which would focus on spreading knowledge and information about Hyperloop Technology and our contribution in making Hyperloop’s dream come true in India.
                </p>
            <EventList />
            </section>
        </>
    )
}
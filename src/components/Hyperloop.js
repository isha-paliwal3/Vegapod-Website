import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import Meter from "./Meter";

export const Hyperloop = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="Hyperloop" id="Hyperloops">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="Hyperloop-bx wow zoomIn">
                        <h2>Hyperloop</h2>
                        <p>Hyperloop is an ultra-high speed ground transportation system for passenger and cargo
proposed as a concept by Elon Musk, CEO of Tesla and SpaceX back in 2013. It
consists of a vacuum tube, a pod and a track. The absence of air ensures the pod runs
in an energy efficient manner due to the low aerodynamic drag, Contactless magnetic
levitation and propulsion give the passengers a smooth and silent ride. Hyperloop
combines the key benefits of speed, comfort and sustainability making it the 5th mode
of transport</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme Hyperloop-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                {/* <Meter value= "1200Km/hr" /> */}
                                <h5>Speed</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                {/* <Meter value= "1200Km/hr" /> */}
                                <h5>Quantity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                {/* <Meter value= "1200Km/hr" /> */}
                                <h5>Quantity</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                {/* <Meter value= "1200Km/hr" /> */}
                                <h5>Quantity</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

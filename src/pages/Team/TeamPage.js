import 'animate.css';
import './TeamPage.css'
import Founder1 from '../../assets/img/Team/founder1.webp';
import Founder2 from '../../assets/img/Team/founder2.webp';
import User from '../../assets/img/Team/user.png';
import Captain from '../../assets/img/Team/Captain.png';
import Rutwik from '../../assets/img/Team/Rutwik.png'
import Sanchit from '../../assets/img/Team/Sanchit.png'
import Shubham from '../../assets/img/Team/Shubham.png'
export const TeamPage = () => {

  return (
    <section className='team' id='team' style={{background:'white'}}>
      <div className='teamBanner'></div>
      <p className='teamDescription'> We're Team VegaPod, the MIT-WPU Hyperloop team working to bring Hyperloop technology to reality</p>
     
      <section className="section-team">
          <div className="container">
            {/* Start Header Section */}
            <div className="row justify-content-center text-center">
              <div className="col-md-8 col-lg-6">
                <div className="header-section">
                  <h3 className="title">Our Founders</h3>
                </div>
              </div>
            </div>
            {/* / End Header Section */}
            <div className="row">
              {/* Start Single Person */}
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="single-person">
                  <div className="person-image">
                    <img src={Founder1} alt="" />
                  </div>
                  <div className="person-info">
                    <h3 className="full-name">Pranay Luniya</h3>
                  </div>
                </div>
              </div>
              {/* / End Single Person */}
              {/* Start Single Person */}
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="single-person">
                  <div className="person-image">
                  <img src={Founder2} alt="" />
                  </div>
                  <div className="person-info">
                    <h3 className="full-name">Kartik Kulkarni</h3>
                  </div>
                </div>
              </div>
              {/* / End Single Person */}
              {/* Start Single Person */}
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="single-person">
                  <div className="person-image">
                  <img src={User} alt="" />
                  </div>
                  <div className="person-info">
                    <h3 className="full-name"></h3>
                  </div>
                </div>
              </div>
              {/* / End Single Person */}
              {/* Start Single Person */}
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="single-person">
                  <div className="person-image">
                  <img src={User} alt="" />
                  </div>
                  <div className="person-info">
                    <h3 className="full-name"></h3>
                  </div>
                </div>
              </div>
              {/* / End Single Person */}
            </div>
          </div>


          <div className="container" >
            {/* Start Header Section */}
            <div className="row justify-content-center text-center">
              <div className="col-md-8 col-lg-6">
                <div className="header-section" style={{marginTop:'50px'}}>
                  <h3 className="title">Our Captain</h3>
                </div>
              </div>
            </div>
            {/* / End Header Section */}
            <div className="row" style={{justifyContent:'center'}}>
              {/* Start Single Person */}
              <div className="col-sm-6 col-lg-4 col-xl-3 align-item-center text-center">
                <div className="single-person">
                  <div className="person-image">
                    <img src={Captain} alt="" />
                  </div>
                  <div className="person-info">
                    <h3 className="full-name">Purnesh Jain</h3>
                  </div>
                </div>
              </div>
              {/* / End Single Person */}
            </div>
          </div>

          <div className="container" >
            {/* Start Header Section */}
            <div className="row justify-content-center text-center">
              <div className="col-md-8 col-lg-6">
                <div className="header-section" style={{marginTop:'50px'}}>
                  <h3 className="title">Our Committee</h3>
                </div>
              </div>
            </div>
            {/* / End Header Section */}
            <div className="row" style={{justifyContent:'center'}}>
              {/* Start Single Person */}
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="single-person">
                  <div className="person-image">
                    <img src={Rutwik} alt="" />
                  </div>
                  <div className="person-info">
                    <h3 className="full-name">Rutwik Kute</h3>
                  </div>
                </div>
              </div>
              {/* / End Single Person */}
              {/* Start Single Person */}
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="single-person">
                  <div className="person-image">
                  <img src={Sanchit} alt="" />
                  </div>
                  <div className="person-info">
                    <h3 className="full-name">Sanchit</h3>
                  </div>
                </div>
              </div>
              {/* / End Single Person */}
              {/* Start Single Person */}
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="single-person">
                  <div className="person-image">
                  <img src={Shubham} alt="" />
                  </div>
                  <div className="person-info">
                    <h3 className="full-name">Shubham </h3>
                  </div>
                </div>
              </div>
              {/* / End Single Person */}
              </div>
            </div>
       
        </section>
    </section>
  )
}

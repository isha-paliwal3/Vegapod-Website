import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
// import LandingPage from './pages/LandingPage';
// import ContactPage from './pages/ContactPage';
// import {TeamPage} from './pages/Team/TeamPage'
import EventPage from './pages/Event/EventPage';
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <LandingPage/> */}
      {/* <TeamPage/> */}
      <EventPage/>
      {/* <ContactPage/> */}
      <Footer />
    </div>
  );
}

export default App;

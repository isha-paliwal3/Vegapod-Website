import { Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import LandingPage from './pages/LandingPage';
import AboutPage from "./pages/About/AboutPage";
import {TeamPage} from './pages/Team/TeamPage'
import EventPage from './pages/Event/EventPage';
import ContactPage from './pages/ContactPage';
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/AboutPage" element={<AboutPage/>} />
        <Route path="/TeamPage" element={<TeamPage/>} />
        <Route path="/EventPage" element={<EventPage/>} />
        <Route path="/Footer" element={<Footer/>} />
        <Route path="/ContactPage" element={<ContactPage/>} />
      </Routes>
    <Footer />
      </>
  );
}

export default App;

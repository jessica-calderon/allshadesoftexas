import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/AboutUs/AboutUs";
import Appointment from "./pages/Appointment/Appointment";
import Contact from "./pages/Contact/Contact";
import ServicesPage from "./pages/Services/Services";
import Footer from './components/Footer/Footer';

function App() {
    return (
        <Router>
            <div className='App'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/services' element={<ServicesPage />} />
                    <Route path='/about-us' element={<AboutUs />} />
                    <Route path='/request-an-appointment' element={<Appointment />} />
                    <Route path='/contact-us' element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

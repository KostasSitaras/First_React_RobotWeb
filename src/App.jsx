import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from "./components/Hero";
{/*import Header from "./components/Header";*/}
import { useEffect } from 'react';
import { Routes,Route } from "react-router";
import Navbar from "./components/Header";
import Home from './components/Hero';
import About from './components/Routes/About';
import Projects from './components/Routes/Projects';
import Contact from './components/Routes/Contact';

export default function App() {
  useEffect(() => {
    AOS.init({
    duration: 1500,
    once: true,
})
  })
  return (
 <main>
  {/* NavBar Navigation Elements */}
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Projects" element={<Projects />} />
    <Route path="/Contact" element={<Contact />} />  
  </Routes>
 

 </main>
 
)
}
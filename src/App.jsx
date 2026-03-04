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
  {/* This is the Home background Gradient And Blur Effect */}        
{/* Gradient Image Right */}
  <img className="absolute top-0 right-0 opacity-60 -z-10" 
  src="gradient.png" alt="Grandient-img" />

{/* Gradient Image Left */}
  <img className="absolute bottom-40 left-0 opacity-60 -z-10 hidden lg:block" 
  src="gradient.png" alt="Grandient-img" />

{/* Blur Effect Right */}
  <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] 
  shadow-[0_0_900px_40px_#e99b63] -rotate-[30deg] -z-10" >
  </div>
{/* Blur Effect Left */}
  <div className="h-0 w-[50rem] absolute top-[55%] left-[-10%] 
  shadow-[0_0_900px_35px_#e99b63] -rotate-[-30deg] -z-10 hidden lg:block" >
  </div>
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
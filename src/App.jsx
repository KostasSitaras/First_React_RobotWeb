import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/Routes/About';
import Projects from './components/Routes/Projects';
import Contact from './components/Routes/Contact';

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 top-16 h-80 w-80 rounded-full bg-orange-400/20 blur-[120px]" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-amber-300/10 blur-[140px]" />
      </div>

      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Hero />} />
      </Routes>
    </main>
  );
}

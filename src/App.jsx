// src/App.jsx
import HeroSection from './components/HeroSection';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="main-wrapper" id="home"> {/* ID moved here */}
      <Navbar />
      <div className="app-container">
        <HeroSection />
      </div>
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
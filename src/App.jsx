// src/App.jsx
import HeroSection from './components/HeroSection';
import Experience from './components/Experience';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="main-wrapper">
      <div className="app-container">
        <HeroSection />
      </div>
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
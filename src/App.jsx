import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Background Shapes
const Background = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-float" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] animate-float decoration-clone" style={{ animationDelay: '2s' }} />
    <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] animate-pulse" />
  </div>
);

function App() {
  return (
    <div className="relative min-h-screen text-white selection:bg-primary/30 selection:text-white">
      <Background />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;

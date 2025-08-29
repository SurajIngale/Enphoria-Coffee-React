import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import Specialties from './components/Specialties';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <MenuHighlights />
      <Specialties />
      <Gallery />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
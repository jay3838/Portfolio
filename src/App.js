import React from 'react';
import './App.css';
import Header from './Header'
import Banner from './Banner'
import Tech from './Tech'
import Projects from './Projects';
import AboutMe from './AboutMe';
import Footer from './Footer';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Tech />
      <Projects />
      <AboutMe />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

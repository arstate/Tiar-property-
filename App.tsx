
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PropertyList from './components/PropertyList';
import Services from './components/Services';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="home" className="scroll-mt-20">
          <Hero />
        </section>
        
        <section id="features" className="py-20 bg-white scroll-mt-20">
          <div className="max-container px-4">
             <Features />
          </div>
        </section>

        <section id="listings" className="py-20 bg-slate-50 scroll-mt-20">
          <PropertyList />
        </section>

        <section id="services" className="py-20 bg-white scroll-mt-20">
          <Services />
        </section>
      </main>
      <section id="contact" className="scroll-mt-20">
        <Footer />
      </section>
    </div>
  );
};

export default App;

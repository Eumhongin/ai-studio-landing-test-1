import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import AppDemo from './components/AppDemo';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-white selection:text-black">
      <Header />
      <main>
        <Hero />
        <BentoGrid />
        <AppDemo />
      </main>
      <Footer />
    </div>
  );
};

export default App;
import React from 'react';
import MotherHero from './components/MotherHero';
import FlowerCard from './components/FlowerCard';
import MotherQuote from './components/MotherQuote';
import MessageForm from './components/MessageForm';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <MotherHero />
      <div className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FlowerCard 
            title="Amor que florece" 
            message="Tu amor por mí es como  una flor que no se marchita." 
          />
          <FlowerCard 
            title="Razones para quererte" 
            message="Tus abrazos curan, tus consejos guían y tu amor es mi hogar." 
          />
          <FlowerCard 
            title="Gracias mamá" 
            message="Por los desvelos, por las preocupaciones y por ese amor que nunca pide nada a cambio." 
          />
        </div>
        <MotherQuote />
        <div className="py-16">
          <MessageForm />
        </div>
      </div>
    </div>
  );
};

export default App;

// DONE
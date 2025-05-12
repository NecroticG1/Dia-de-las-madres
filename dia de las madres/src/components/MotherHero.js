import React from 'react';

const MotherHero = () => {
  return (
    <div className="relative h-96 bg-gradient-to-r from-pink-400 to-purple-500 overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">¡Feliz Día Mamá!</h1>
        <p className="text-xl md:text-2xl mb-6">Porque una sola flor nunca es suficiente...</p>
      </div>
    </div>
  );
};

export default MotherHero;
import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedSection, setSelectedSection] = useState('');

  const handleClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-veryPeri-light to-veryPeri-dark font-sans">
      <nav className="bg-veryPeri text-white p-4 fixed w-full flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-xl flex items-center mb-2 sm:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 12l9-9 9 9h-3v9h-12v-9h-3z" />
          </svg>
        </h1>
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          {['section1', 'section2', 'section3'].map((section, index) => (
            <li key={index}>
              <a
                href={`#${section}`}
                onClick={() => handleClick(section)}
                className={`hover:text-veryPeri-light relative ${
                  selectedSection === section ? 'text-veryPeri-light' : ''
                }`}
              >
                {`Seção ${index + 1}`}
                <span
                  className={`absolute left-0 right-0 bottom-0 h-0.5 bg-veryPeri-light transition-transform transform ${
                    selectedSection === section ? 'scale-x-100' : 'scale-x-0'
                  } hover:scale-x-100`}
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="pt-20 sm:pt-16">
        <section id="section1" className="h-screen flex flex-col items-center justify-center">
          <h2 className="text-2xl mb-4">Comportamentos</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Interesse em explorar novos ambientes</li>
            <li>Capacidade de seguir instruções simples</li>
            <li>Interação social com outras crianças</li>
          </ul>
        </section>
        <section id="section2" className="h-screen flex items-center justify-center">
          <h2 className="text-2xl">Reações</h2>
        </section>
        <section id="section3" className="h-screen flex items-center justify-center">
          <h2 className="text-2xl">Ações</h2>
        </section>
      </main>
    </div>
  );
}

export default App;

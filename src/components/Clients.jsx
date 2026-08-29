import React from 'react';
import clientsData from '../lib/data.json';

const Clients = () => {
  return (
    <section className="py-20 bg-transparent border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold tracking-widest text-brand-orange uppercase mb-4">
            Trusted By Industry Leaders
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80">
          {clientsData.map((client) => (
            <a 
              key={client.id} 
              href={client.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group transition-all duration-500 ease-in-out"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="h-10 md:h-14 w-auto object-contain transition-all duration-500 ease-in-out filter brightness-0 invert-[0.4] group-hover:invert-[1]"
                style={{ filter: 'brightness(0) invert(0.4)' }}
                onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(0) invert(1)'}
                onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(0) invert(0.4)'}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

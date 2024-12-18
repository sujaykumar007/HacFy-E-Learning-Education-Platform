import React from 'react';

const OurClients = () => {
  return (
    <section className="clients py-16 bg-{#030610}">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Trusted Clients</h2>
        
        <div className="logos-slider overflow-hidden relative">
          <div className="logos-slide flex animate-scroll">
            {/* Duplicate logos for seamless scrolling */}
            <img src="/client1.png" alt="Client 1" className="mx-8 h-12 object-contain" />
            <img src="/client2.png" alt="Client 2" className="mx-8 h-12 object-contain" />
            <img src="/client3.png" alt="Client 3" className="mx-8 h-12 object-contain" />
            <img src="/client4.png" alt="Client 4" className="mx-8 h-12 object-contain" />
            <img src="/client5.png" alt="Client 5" className="mx-8 h-12 object-contain" />
            {/* Duplicate set for continuous scroll */}
            <img src="/client1.png" alt="Client 1" className="mx-8 h-12 object-contain" />
            <img src="/client2.png" alt="Client 2" className="mx-8 h-12 object-contain" />
            <img src="/client3.png" alt="Client 3" className="mx-8 h-12 object-contain" />
            <img src="/client4.png" alt="Client 4" className="mx-8 h-12 object-contain" />
            <img src="/client5.png" alt="Client 5" className="mx-8 h-12 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;

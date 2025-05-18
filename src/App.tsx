import './index.css';
import React, { useEffect, useRef, useState } from 'react';

const PARTY_DATE = new Date('2025-06-14T21:00:00'); // local time

function getCountdownParts() {
  const now = new Date();
  const diff = PARTY_DATE.getTime() - now.getTime();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, expired: false };
}

function App() {
  const [countdown, setCountdown] = useState(getCountdownParts());

  useEffect(() => {
    const interval = setInterval(() => setCountdown(getCountdownParts()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Basic fade-in on scroll (intersection observer)
  const sectionRefs = useRef([]);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.IntersectionObserver) {
      const observer = new window.IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.18 });
      sectionRefs.current.forEach((el) => { if (el) observer.observe(el); });
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className="min-h-screen bg-[var(--main-bg)] font-mont">
      {/* 1. Hero / Invitation Card */}
      <section
        ref={el => sectionRefs.current[0] = el}
        className="flex flex-col justify-center items-center min-h-[60vh] md:min-h-[80vh] relative px-2 overflow-hidden"
      >
        <div className="hero-floral-bg absolute inset-0 z-0 pointer-events-none" />
        <div className="bg-white border-4 border-[var(--primary)] rounded-xl md:p-10 p-4 shadow-sm relative z-[1] w-full max-w-[430px] sm:rounded-md">
          <div className="text-center">
            <div className="text-sm mb-3 tracking-widest" style={{ color: '#847c74' }}>15 AÑOS</div>
            <h1 className="md:text-6xl text-3xl font-semibold mb-2 text-[var(--footer-dark)] tracking-wider">LOLA</h1>
            <div className="uppercase md:text-md text-sm tracking-widest" style={{ color: '#979696' }}>Jun &nbsp; 14 &nbsp; 2025</div>
          </div>
        </div>
      </section>
      {/* 2. Countdown Section */}
      <section
        ref={el => sectionRefs.current[1] = el}
        className="bg-[var(--primary)] py-8 md:py-10 text-white text-center"
      >
        <div className="mb-2 px-2 md:px-0 text-base md:text-lg" style={{ opacity: 0.7 }}>
          ¡Te espero para festejar este gran momento de mi vida!
        </div>
        {
          countdown.expired ? (
            <div className="md:text-2xl text-lg font-bold">¡Es hoy!</div>
          ) : (
            <>
              <div className="flex flex-row justify-center gap-2 md:gap-3 items-baseline w-full">
                <div className="font-bold text-2xl md:text-3xl min-w-[35px]">{countdown.days.toString().padStart(2, '0')}</div>
                <div className="text-lg md:text-xl mx-0.5 md:mx-1">:</div>
                <div className="font-bold text-2xl md:text-3xl min-w-[35px]">{countdown.hours.toString().padStart(2, '0')}</div>
                <div className="text-lg md:text-xl mx-0.5 md:mx-1">:</div>
                <div className="font-bold text-2xl md:text-3xl min-w-[35px]">{countdown.minutes.toString().padStart(2, '0')}</div>
                <div className="text-lg md:text-xl mx-0.5 md:mx-1">:</div>
                <div className="font-bold text-2xl md:text-3xl min-w-[35px]">{countdown.seconds.toString().padStart(2, '0')}</div>
              </div>
              <div className="flex justify-center gap-3 md:gap-8 mt-2 text-xs md:text-xs w-full" style={{ opacity: 0.7 }}>
                <span className="min-w-[35px]">días</span><span className="min-w-[35px]">hs</span><span className="min-w-[35px]">min</span><span className="min-w-[35px]">seg</span>
              </div>
            </>
          )
        }
      </section>
      {/* 3. Google Maps Embed Section */}
      <section ref={el => sectionRefs.current[2] = el} className="py-10 md:py-12 flex flex-col items-center px-2 md:px-0">
        <h3 className="text-lg font-semibold mb-3 text-[var(--footer-dark)] flex items-center gap-2">
          <img src="https://ext.same-assets.com/4130007303/951057477.svg" alt="Fiesta Icon" className="inline-block w-6 h-6 mr-1" />
          ¿Dónde es la fiesta?
        </h3>
        <div className="w-full flex justify-center">
          <iframe
            title="Ubicación de la fiesta"
            src="https://www.google.com/maps?q=Francisco+Bilbao+2928,+CABA&output=embed"
            width="100%"
            height="240"
            style={{ border: 0, borderRadius: '16px', maxWidth:'400px', width:'100%' }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <a
          href="https://maps.app.goo.gl/zSokm6u1SUgpo3uw7"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 underline text-[var(--primary)] text-base"
        >
          Abrir en Google Maps
        </a>
      </section>
      {/* 4. Confirmation Section */}
      <section ref={el => sectionRefs.current[3] = el} className="py-12 md:py-16 flex flex-col items-center px-2 md:px-0">
        <h2 className="uppercase text-xl font-semibold flex items-center gap-2 pb-2 text-center" style={{ letterSpacing: '2px', color: '#626261' }}>
          <img src="https://ext.same-assets.com/4130007303/4116460330.svg" alt="Dresscode Icon" className="inline-block w-5 h-5 mr-1" />
          Confirmación de Asistencia
        </h2>
        <div className="mt-2 mb-6 text-center text-base text-[var(--gray)]">
          Cuento con tu presencia.<br />¡Confirmá tu asistencia!
        </div>
        <a
          href="https://forms.gle/PXbLgThDCxF7pgpw7"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--accent)] px-8 py-3 rounded-full text-white tracking-wider font-semibold shadow transition hover:scale-105 hover:bg-[var(--primary)] w-full max-w-xs text-center"
        >
          CONFIRMAR ASISTENCIA
        </a>
      </section>
      {/* 5. Instagram Section */}
      <section ref={el => sectionRefs.current[4] = el} className="py-6 md:py-10 flex flex-col items-center px-2 md:px-0">
        <a
          href="https://www.instagram.com/lolugarciaa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary)] flex flex-col items-center"
        >
          <img src="https://ext.same-assets.com/4130007303/846481072.svg" alt="Instagram" className="w-10 h-10 md:w-11 md:h-11 mx-auto" />
          <div className="mt-2 text-[var(--gray)] text-base">@lolugarciaa</div>
        </a>
      </section>
      {/* 6. Playlist/Music Section */}
      <section ref={el => sectionRefs.current[5] = el} className="py-8 md:py-12 flex flex-col items-center px-2 md:px-0">
        <img src="https://ext.same-assets.com/4130007303/2060808040.svg" alt="Playlist Icon" className="w-10 h-10 md:w-11 md:h-11" />
        <div className="mt-4 text-[var(--footer-dark)] text-center text-base md:text-lg">
          <p className="mb-2">¡Ayudame sugiriendo las canciones que pensás que no pueden faltar en la fiesta!</p>
          <a
            href="https://forms.gle/Gx9GfxVVD2BfYBSo8"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[var(--primary)]"
          >
            Sugerir canción
          </a>
        </div>
      </section>
      {/* 7. Gift Section */}
      <section ref={el => sectionRefs.current[6] = el} className="bg-[var(--accent)] py-8 md:py-12 flex flex-col items-center px-2 md:px-0 pb-16">
        <img src="https://ext.same-assets.com/4130007303/2193444332.svg" alt="Gift Icon" className="w-12 h-12 md:w-[48px] md:h-[48px]" />
        <div className="mt-4 text-[var(--footer-dark)] text-center text-base md:text-lg">
          El mejor regalo es que vengas,<br />pero si deseás regalarme algo,<br />podés colaborar con mis sueños y anhelos✨<br /><span className="text-sm">¡Muchas gracias!</span><br />
          <button
            className="mt-3 underline text-[var(--footer-dark)] w-full max-w-xs py-2"
            onClick={() => alert('CBU: 0170105640000002934486\nAlias: PELA.LOLA.VELEZ\nBanco BBVA')}
          >
            Ver datos bancarios
          </button>
        </div>
      </section>
      {/* 8. Footer */}
      <footer ref={el => sectionRefs.current[7] = el} className="w-full bg-[var(--footer-dark)] py-7 text-center text-[#f8f7f7] text-xs">
        Invitaciones Digitales <a className="underline" href="https://agendalafecha.com" target="_blank" rel="noopener noreferrer">Agendá la Fecha</a> 2025. Todos los derechos reservados<br />
        <a href="https://www.instagram.com/agendalafecha/" className="text-[#d9bcbe] underline" target="_blank" rel="noopener noreferrer">@agendalafecha</a>
      </footer>
    </div>
  );
}

export default App;

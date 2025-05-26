import './index.css';
import React, { useEffect, useRef, useState } from 'react';
import config from './invite.config';

function getPartyDateTime(): Date {
  // config.date is 'YYYY-MM-DD', config.hour is 'HH:mm'
  return new Date(`${config.date}T${config.hour}`);
}

function getCountdownParts() {
  const now = new Date();
  const PARTY_DATE = getPartyDateTime();
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
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const interval = setInterval(() => setCountdown(getCountdownParts()), 1000);
    return () => clearInterval(interval);
  }, []);

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
      {/* Hero Section with Floral BG */}
      <section
        ref={el => { sectionRefs.current[0] = el as HTMLElement | null }}
        className="flex flex-col justify-center items-center min-h-[60vh] md:min-h-[80vh] relative px-2 overflow-hidden"
      >
        <div className="hero-floral-bg absolute inset-0 z-0 pointer-events-none" style={{backgroundImage: `url('${config.images.floralBg}')`}} />
        <div className="bg-white border-4 border-[var(--primary)] rounded-xl md:p-10 p-4 shadow-sm relative z-[1] w-full max-w-[430px] sm:rounded-md">
          <div className="text-center">
            <div className="text-sm mb-3 tracking-widest" style={{ color: '#847c74' }}>{`${config.age} AÑOS`}</div>
            <h1 className="md:text-6xl text-3xl font-semibold mb-2 text-[var(--footer-dark)] tracking-wider">{config.name.toUpperCase()}</h1>
            <div className="uppercase md:text-md text-sm tracking-widest" style={{ color: '#979696' }}>
              {new Date(config.date + 'T00:00:00-03:00').toLocaleDateString('es-AR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
              })}
            </div>
            <div className="text-sm mb-3 tracking-widest" style={{ color: '#847c74' }}>{`${config.hour} HS`}</div>
          </div>
        </div>
      </section>
      {/* Countdown Section */}
      <section
        ref={el => { sectionRefs.current[1] = el as HTMLElement | null }}
        className="bg-[var(--primary)] py-8 md:py-10 text-white text-center"
      >
        <div className="mb-2 px-2 md:px-0 text-base md:text-lg" style={{ opacity: 0.7 }}>
          {config.textos.countdownInvitation}
        </div>
        {
          countdown.expired ? (
            <div className="md:text-2xl text-lg font-bold">{config.textos.countdownToday}</div>
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
      {/* Location / Google Maps Section */}
      <section ref={el => { sectionRefs.current[2] = el as HTMLElement | null }} className="py-10 md:py-12 flex flex-col items-center px-2 md:px-0">
        <div className="flex flex-col items-center mb-4">
          <img
            src={config.images.fiestaIcon}
            alt="Fiesta Icon"
            className="w-14 h-14 mb-2"
          />
          <h3 className="text-lg font-semibold text-[var(--footer-dark)] text-center">
            {config.textos.locationTitle}
          </h3>
        </div>
        <div className="text-base text-[var(--footer-dark)] mb-2 font-medium text-center">
          {config.venue}<br/>{config.address}
        </div>
        <div className="w-full flex justify-center">
          {/* <iframe
            title="Ubicación de la fiesta"
            src={config.googleMapsEmbed}
            width="100%"
            height="240"
            style={{ border: 0, borderRadius: '16px', maxWidth:'400px', width:'100%' }}
            allowFullScreen
            loading="lazy"
          ></iframe> */}
        </div>
        <a
          href={config.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[var(--accent)] border border-[var(--accent)] px-8 py-3 rounded-full tracking-wider font-semibold shadow transition hover:scale-105 hover:bg-[var(--primary)] hover:text-white w-full max-w-xs text-center"
          >
          Ver en Google Maps
        </a>
      </section>
      {/* Dress Code Section */}
      <section
        ref={el => { sectionRefs.current[3] = el as HTMLElement | null }}
        className="bg-[var(--primary)] text-white py-12 md:py-16 flex flex-col items-center px-2 md:px-0 text-center"
      >
        <div className="flex flex-col items-center mb-4">
         <img
            src={config.images.dresscodeIcon}
            alt="Dresscode Icon"
            className="w-20 h-20 mb-2"
          />
          <h2 
          className="
          text-2xl 
          md:text-3xl 
          font-semibold 
          text-[var(--white)] 
          mb-2"
          >
            ¡Dress Code!
          </h2>
        </div>
        <p className="text-[var(--destructive)] mb-0 max-w-md">
          Elegante, NO Blanco
        </p>
      </section>
      {/* RSVP / Confirmation Section */}
      <section
        ref={el => { sectionRefs.current[4] = el as HTMLElement | null }}
        className="py-12 md:py-20 flex flex-col items-center px-4 md:px-0 text-center"
      >
        <div className="flex flex-col items-center mb-4">
          <h2 className="uppercase text-xl font-semibold flex items-center gap-2 pb-2" style={{ letterSpacing: '2px' }}>
          {config.textos.rsvpTitle}
        </h2>
        </div>
  
        <div className="mt-2 mb-6 text-base" style={{ opacity: 0.8 }}>
          {config.textos.rsvpSubtitle}
        </div>
        <a
          href={config.rsvpFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[var(--accent)] border border-[var(--accent)] px-8 py-3 rounded-full tracking-wider font-semibold shadow transition hover:scale-105 hover:bg-[var(--primary)] hover:text-white w-full max-w-xs text-center"
        >
          {config.textos.rsvpButton}
        </a>
      </section>
      {/* Instagram Section */}
      <section
        ref={el => { sectionRefs.current[4] = el as HTMLElement | null }}
        className="py-12 md:py-20 flex flex-col items-center px-4 md:px-0 text-center"
      >
        
        <div className="flex flex-col items-center mb-4">
         <img
            src={config.images.instagramIcon}
            alt="Instagram"
            className="w-20 h-20 mb-2"
          />
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--footer-dark)] mb-2">¡Seguime en Instagram!</h2>
          <p className="text-[var(--gray)] mb-6 max-w-md">
            Compartí tu emoción, mirá fotos y seguí las novedades de la fiesta en mi perfil.
          </p>
           {/* <div className="text-[var(--gray)] text-base mb-4">@{config.instagramHandle}</div> */}
          <a
          href={config.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--accent)] px-8 py-3 rounded-full text-white tracking-wider font-semibold shadow transition hover:scale-105 hover:bg-[var(--primary)] w-full max-w-xs"
        >
          Ver en Instagram
        </a>
        </div>       
      </section>
      {/* Playlist/Music Suggestion Section */}
      <section 
        ref={el => { sectionRefs.current[5] = el as HTMLElement | null }} 
        className="py-12 md:py-20 flex flex-col items-center px-4 md:px-0 text-center">
         <div className="flex flex-col items-center mb-4">
         <img
            src={config.images.playlistIcon}
            alt="Playlist Icon"
            className="w-20 h-20 mb-2"
          />
          <p className="mb-2">{config.textos.playlistText}</p>
           {/* <div className="text-[var(--gray)] text-base mb-4">@{config.instagramHandle}</div> */}
          <a
          href={config.playlistFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--accent)] px-8 py-3 rounded-full text-white tracking-wider font-semibold shadow transition hover:scale-105 hover:bg-[var(--primary)] w-full max-w-xs"
        >
          {config.textos.playlistButton}
        </a>
        </div> 
      </section>
      {/* Gift/CBU Section */}
      <section ref={el => { sectionRefs.current[6] = el as HTMLElement | null }} className="bg-[var(--accent)] py-8 md:py-12 flex flex-col items-center px-2 md:px-0 pb-16">
        <img 
          src={config.images.giftIcon} 
          alt="Gift Icon" 
          className="w-20 h-20 mb-2"
        />
        <div className="mt-4 text-[var(--footer-dark)] text-center text-base md:text-lg">
          {config.gift.description}
          <br />
          <br />
          <span className="text-sm">
            {config.textos.giftThankYou}
          </span>
            <br />
            <br />
          <button
            className="bg-white px-8 py-3 rounded-full text-accent tracking-wider font-semibold shadow transition w-full max-w-xs"
            onClick={() => alert(`CVU: ${config.gift.cbu}\nAlias: ${config.gift.alias}\nBanco: ${config.gift.bank}`)}
          >
            {config.textos.giftButton}
          </button>
        </div>
      </section>
      {/* Footer */}
      <footer ref={el => { sectionRefs.current[7] = el as HTMLElement | null }} className="w-full bg-[var(--footer-dark)] py-7 text-center text-[#f8f7f7] text-xs">
        {config.textos.footer}<br />
        <a href="https://www.instagram.com/tiagoolorenzon/" className="text-[#d9bcbe] underline" target="_blank" rel="noopener noreferrer">{config.textos.footerInsta}</a>
      </footer>
    </div>
  );
}

export default App;

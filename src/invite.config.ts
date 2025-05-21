export interface InviteConfig {
  name: string;
  age: number;
  date: string; // ISO string (YYYY-MM-DD)
  hour: string; // '21:00'
  venue: string;
  address: string;
  googleMapsUrl: string;
  googleMapsEmbed: string;
  rsvpFormUrl: string;
  playlistFormUrl: string;
  instagramHandle: string;
  instagramUrl: string;
  gift: {
    cbu: string;
    alias: string;
    bank: string;
    description: string;
  };
  textos: {
    mainSubtitle: string;
    rsvpTitle: string;
    rsvpSubtitle: string;
    rsvpButton: string;
    countdownToday: string;
    countdownInvitation: string;
    dresscodeTitle: string;
    dresscode: string;
    playlistTitle: string;
    playlistText: string;
    playlistButton: string;
    giftTitle: string;
    giftButton: string;
    giftThankYou: string;
    locationTitle: string;
    instagramTitle: string;
    instagramText: string;
    footer: string;
    footerInsta: string;
  };
  images: {
    logo?: string;
    floralBg?: string;
    fiestaIcon?: string;
    dresscodeIcon?: string;
    instagramIcon?: string;
    playlistIcon?: string;
    giftIcon?: string;
  };
}

const config: InviteConfig = {
  name: "Mia",
  age: 15,
  date: "2025-05-31",
  hour: "21:30",
  venue: "Jano`s Darwin 1",
  address: "Cnel. Niceto Vega 5350, CABA",
  googleMapsUrl: "https://maps.app.goo.gl/CmFxPBvRhF7dLteXA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Jano's Darwin, Buenos Aires&t=&z=15&ie=UTF8&iwloc=&output=embed",
  rsvpFormUrl: "https://forms.gle/7VwhiF4XzSZkYpr67",
  playlistFormUrl: "https://open.spotify.com/playlist/2rI6ljLAYgVnOFMw1shRDC?si=9NZfk3_uRY2_kVNwYzA6KA&pt=d34e99d09d4b2b71997c8efd047cd741&pi=s3GOSLrzToaKB",
  instagramHandle: "mialorenzon13",
  instagramUrl: "https://www.instagram.com/mialorenzon13",
  gift: {
    cbu: "0000003100061433578137",
    alias: "mia.lorenzon.mp",
    bank: "Mercado Pago",
    description: "El mejor regalo es que vengas, pero si deseás hacerlo, podés colaborar a través de este medio ✨"
  },
  textos: {
    mainSubtitle: "¡Te espero para festejar este gran momento de mi vida!",
    rsvpTitle: "Confirmación de Asistencia",
    rsvpSubtitle: "Cuento con tu presencia. ¡Confirmá tu asistencia!",
    rsvpButton: "CONFIRMAR ASISTENCIA",
    countdownToday: "¡Es hoy!",
    countdownInvitation: "¡Te espero para festejar este gran momento de mi vida!",
    dresscodeTitle: "DRESS CODE",
    dresscode: "Elegante, NO Blanco",
    playlistTitle: "¡PLAYLIST!",
    playlistText: "¡Ayudame sugiriendo las canciones que pensás que no pueden faltar en la fiesta!",
    playlistButton: "Sugerir canción",
    giftTitle: "Hacer un regalo",
    giftButton: "Ver datos bancarios",
    giftThankYou: "¡Muchas gracias!",
    locationTitle: "¿Dónde es la fiesta?",
    instagramTitle: "Instagram",
    instagramText: "¡Preparate para esta gran fiesta! Seguime en mi cuenta de Instagram y etiquetame en tus fotos y videos.",
    footer: "By Tiago Lorenzon",
    footerInsta: "@tiagoolorenzon"
  },
  images: {
    logo: undefined, // Can add if logo is used in hero
    floralBg: "https://ext.same-assets.com/4130007303/3334793957.jpeg",
    fiestaIcon: "https://ext.same-assets.com/4130007303/951057477.svg",
    dresscodeIcon: "https://ext.same-assets.com/4130007303/4116460330.svg",
    instagramIcon: "https://ext.same-assets.com/4130007303/846481072.svg",
    playlistIcon: "https://ext.same-assets.com/4130007303/2060808040.svg",
    giftIcon: "https://ext.same-assets.com/4130007303/2193444332.svg"
  }
};

export default config;

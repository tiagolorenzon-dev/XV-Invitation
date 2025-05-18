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
  hour: "21:00",
  venue: "Jano`s Darwin",
  address: "Cnel. Niceto Vega 5350, CABA",
  googleMapsUrl: "https://maps.app.goo.gl/CmFxPBvRhF7dLteXA",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.61340013112!2d-58.436747600000004!3d-34.5886475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5e85c952bc1%3A0x3b019e82cc9af99c!2sJano&#39;s%20Darwin!5e0!3m2!1ses!2sar!4v1747608167807!5m2!1ses!2sar",
  rsvpFormUrl: "https://forms.gle/PXbLgThDCxF7pgpw7",
  playlistFormUrl: "https://forms.gle/Gx9GfxVVD2BfYBSo8",
  instagramHandle: "lolugarciaa",
  instagramUrl: "https://www.instagram.com/lolugarciaa",
  gift: {
    cbu: "0170105640000002934486",
    alias: "PELA.LOLA.VELEZ",
    bank: "BBVA",
    description: "El mejor regalo es que vengas, pero si deseás regalarme algo, podés colaborar con mis sueños y anhelos✨ ¡Muchas gracias!"
  },
  textos: {
    mainSubtitle: "¡Te espero para festejar este gran momento de mi vida!",
    rsvpTitle: "Confirmación de Asistencia",
    rsvpSubtitle: "Cuento con tu presencia. ¡Confirmá tu asistencia!",
    rsvpButton: "CONFIRMAR ASISTENCIA",
    countdownToday: "¡Es hoy!",
    countdownInvitation: "¡Te espero para festejar este gran momento de mi vida!",
    dresscodeTitle: "DRESS CODE",
    dresscode: "Elegante",
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

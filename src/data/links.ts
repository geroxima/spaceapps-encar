export interface LinkItem {
  label: string;
  url: string;
  icon: string;
  external?: boolean;
  featured?: boolean;
  type?: string;
}

export const links: LinkItem[] = [
  {
    label: "Registrate Ahora",
    url: "https://forms.gle/cGJBWfHpiueMBmN88",
    icon: "userplus",
    featured: true,
    external: true,
  },
  {
    label: "Los 14 Desafíos",
    url: "/desafios",
    icon: "spaceapps",
    featured: false,
    external: false,
  },
  // {
  //   label: "Registro Oficial",
  //   url: "https://www.spaceappschallenge.org/2026/local-events/encarnacion/",
  //   icon: "verified",
  //   external: true,
  //   featured: false,
  // },
  // {
  //   label: "Sé voluntario",
  //   url: "https://docs.google.com/forms/d/e/1FAIpQLSfU7KRuAJHs5taTU83RRN3O1YY6UsGOTkQP1mgnR7FrnbO10w/viewform?usp=dialog",
  //   icon: "hands",
  //   external: true,
  //   featured: false,
  // },
  // {
  //   label: "Sé mentor",
  //   url: "https://docs.google.com/forms/d/e/1FAIpQLSd356-2bes7XwDDpPHsjyjzX1eVBQ-JrkOja4oh8DO5K2oaiA/viewform?usp=dialog",
  //   icon: "users",
  //   external: true,
  //   featured: false,
  // },
  {
    label: "Visitá Nuestra Web",
    url: "/#",
    icon: "planet",
    external: false,
    featured: false,
  },
  {
    label: "WhatsApp",
    url: "https://wa.me/595983950436?text=%C2%A1Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20el%20NASA%20Space%20Apps%20Challenge%20Encarnaci%C3%B3n",
    icon: "whatsapp",
    external: true,
    type: "social",
  },
  {
    label: "Instagram",
    url: "https://instagram.com/nasaencar",
    icon: "instagram",
    external: true,
    type: "social",
  },

  {
    label: "Tiktok",
    url: "https://tiktok.com/@nasaencar",
    icon: "tiktok",
    external: true,
    type: "social",
  },

  {
    label: "Envianos un Email",
    url: "mailto:info@nasaencar.com",
    icon: "mail",
  },
];

export interface LinkItem {
  label: string;
  url: string;
  icon: string;
  external?: boolean;
  featured?: boolean;
}

export const links: LinkItem[] = [
  {
    label: "Registrate Ahora",
    url: "https://www.spaceappschallenge.org/2026/local-events/encarnacion/",
    icon: "register",
    featured: true,
    external: true,
  },
  {
    label: "Sé voluntario",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfU7KRuAJHs5taTU83RRN3O1YY6UsGOTkQP1mgnR7FrnbO10w/viewform?usp=dialog",
    icon: "hands",
    external: true,
    featured: false,
  },
  {
    label: "Sé mentor",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSd356-2bes7XwDDpPHsjyjzX1eVBQ-JrkOja4oh8DO5K2oaiA/viewform?usp=dialog",
    icon: "users",
    external: true,
    featured: false,
  },
  {
    label: "WhatsApp",
    url: "https://wa.me/595983950436?text=%C2%A1Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20el%20NASA%20Space%20Apps%20Challenge%20Encarnaci%C3%B3n",
    icon: "whatsapp",
    external: true,
  },
  {
    label: "Visitá Nuestra Web",
    url: "/#",
    icon: "website",
    external: false,
    featured: false,
  },
  {
    label: "Instagram",
    url: "https://instagram.com/nasaencar",
    icon: "instagram",
    external: true,
  },

  {
    label: "Envianos un Email",
    url: "mailto:info@nasaencar.com",
    icon: "email",
  },
];

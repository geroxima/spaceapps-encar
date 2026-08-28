import type { ImageMetadata } from "astro";

import first from "@/assets/winners/first.jpg";
import second from "@/assets/winners/second.jpg";
import third from "@/assets/winners/third.jpg";
import third2 from "@/assets/winners/third-2.jpg";
import third3 from "@/assets/winners/third-3.jpg";

export interface Winner {
  name: string;
  place: number;
  image: ImageMetadata;
}

export const winners: Winner[] = [
  {
    name: "ENCOM PY",
    place: 1,
    image: first,
  },
  {
    name: "EXOPLANETA",
    place: 2,
    image: second,
  },
  {
    name: "YVAGA EXPLORERS",
    place: 3,
    image: third,
  },
  {
    name: "BTI DEL CREE",
    place: 3,
    image: third2,
  },
  {
    name: "ASTROHORSE",
    place: 3,
    image: third3,
  },
];
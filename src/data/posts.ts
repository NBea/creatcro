// src/data/posts.ts

import image1 from "../assets/photography/1.jpg";
import image2 from "../assets/photography/2.jpg";
import image3 from "../assets/photography/3.jpg";
import image4 from "../assets/photography/4.jpg";
import image5 from "../assets/photography/5.jpg";
import image6 from "../assets/photography/6.jpg";
import image8 from "../assets/photography/8.jpg";
import image10 from "../assets/photography/10.jpg";
import image11 from "../assets/photography/11.jpg";
import image13 from "../assets/photography/13.jpg";
import image14 from "../assets/photography/14.jpg";
import image15 from "../assets/photography/15.jpg";
import image19 from "../assets/photography/19.jpg";
import image17 from "../assets/photography/17.jpg";
import image18 from "../assets/photography/18.jpg";

import image20 from "../assets/artwork/Ivana-redpanda.jpg";
import image21 from "../assets/artwork/Bruno.jpg";
import image22 from "../assets/artwork/IvanaStalker.png";
import image23 from "../assets/artwork/Mother.jpg";

export type Post = {
  id: number;
  type: "photography" | "artwork";
  title: string;
  image: string;
  category: "nature" | "people" | "water";
  author: string;
  description: string;
  photoId?: number; // samo artwork ima ovo
};

export const posts: Post[] = [
  {
    id: 1,
    type: "photography",
    title: "Grandma",
    image: image1,
    category: "people",
    author: "Nika",
    description: "Beautiful photo",
  },
  {
    id: 2,
    type: "photography",
    title: "Family time",
    image: image2,
    category: "people",
    author: "Nika",
    description: "Work it",
  },
  {
    id: 3,
    type: "photography",
    title: "Dad",
    image: image3,
    category: "people",
    author: "Nika",
    description: "Prom night",
  },
  {
    id: 4,
    type: "photography",
    title: "Ivana on a hill",
    image: image4,
    category: "people",
    author: "Nika",
    description: "Climbing is hard",
  },
  {
    id: 5,
    type: "photography",
    title: "Double trouble",
    image: image5,
    category: "people",
    author: "Nika",
    description: "Cuddle time",
  },
  {
    id: 6,
    type: "photography",
    title: "Girl in nature",
    image: image6,
    category: "people",
    author: "Nika",
    description: "Beautiful forest fairy",
  },
  {
    id: 8,
    type: "photography",
    title: "What is that?",
    image: image8,
    category: "people",
    author: "Nika",
    description: "Looking into the unknown",
  },
  {
    id: 10,
    type: "photography",
    title: "Ivana stalking",
    image: image10,
    category: "people",
    author: "Nika",
    description: "What are friends for? Stalking.",
  },
  {
    id: 11,
    type: "photography",
    title: "Matija gets a gift",
    image: image11,
    category: "people",
    author: "Nika",
    description: "Suprise! Happy birthday.",
  },
  {
    id: 13,
    type: "photography",
    title: "Cheers",
    image: image13,
    category: "people",
    author: "Nika",
    description: "Cheering on, by Ivana",
  },
  {
    id: 14,
    type: "photography",
    title: "Bruno look",
    image: image14,
    category: "people",
    author: "Nika",
    description: "Whachu looking at",
  },
  {
    id: 15,
    type: "photography",
    title: "Ooh shiny",
    image: image15,
    category: "people",
    author: "Nika",
    description: "Money well spent.",
  },
   {
    id: 17,
    type: "photography",
    title: "Good night",
    image: image17,
    category: "people",
    author: "Nika",
    description: "Love is in the air",
  },
  {
    id: 18,
    type: "photography",
    title: "Love is in the air",
    image: image18,
    category: "people",
    author: "Nika",
    description: "Couples, smh",
  },
  {
    id: 19,
    type: "photography",
    title: "Motherly love",
    image: image19,
    category: "people",
    author: "Nika",
    description: "Painting with love",
  },
  {
    id: 20,
    type: "artwork",
    title: "Insipred by Cheers",
    image: image20,
    category: "people",
    author: "Nika",
    description: "Artwork was made by being inspired from the original photography",
    photoId: 13,
  },
  {
    id: 21,
    type: "artwork",
    title: "Insipred by Bruno look",
    image: image21,
    category: "people",
    author: "Nika",
    description: "Artwork was made by being inspired from the original photography",
    photoId: 14,
  },
  {
    id: 22,
    type: "artwork",
    title: "Insipred by Ivana stalking",
    image: image22,
    category: "people",
    author: "Nika",
    description: "Artwork was made by being inspired from the original photography",
    photoId: 10,
  },
  {
    id: 23,
    type: "artwork",
    title: "Insipred by Motherly love",
    image: image23,
    category: "people",
    author: "Nika",
    description: "Artwork was made by being inspired from the original photography",
    photoId: 19,
  },
  {
    id: 22,
    type: "artwork",
    title: "Insipred by Ivana stalking",
    image: image22,
    category: "people",
    author: "Nika",
    description: "Artwork was made by being inspired from the original photography",
    photoId: 10,
  },
  {
    id: 21,
    type: "artwork",
    title: "Insipred by Bruno look",
    image: image21,
    category: "people",
    author: "Nika",
    description: "Artwork was made by being inspired from the original photography",
    photoId: 14,
  },
  {
    id: 23,
    type: "artwork",
    title: "Insipred by Motherly love",
    image: image23,
    category: "people",
    author: "Nika",
    description: "Artwork was made by being inspired from the original photography",
    photoId: 19,
  },

];
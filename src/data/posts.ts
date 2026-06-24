// src/data/posts.ts

import NatureImg1 from "../assets/NaturePhotography1.jpg";

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
    title: "Forest broj 1",
    image: NatureImg1,
    category: "nature",
    author: "ana",
    description: "Beautiful forest photo",
  },
  {
    id: 2,
    type: "photography",
    title: "Ocean",
    image: NatureImg1,
    category: "water",
    author: "ana",
    description: "Calm ocean view",
  },
  {
    id: 3,
    type: "artwork",
    title: "Forest Painting koji se veze",
    image: NatureImg1,
    category: "nature",
    author: "ivan",
    description: "Inspired by Forest",
    photoId: 1,
  },
  {
    id: 4,
    type: "photography",
    title: "Ocean Sketch",
    image: "https://placehold.co/800x500",
    category: "water",
    author: "ana",
    description: "Sketch based on Ocean",
    photoId: 2,
  },
  {
    id: 5,
    type: "photography",
    title: "Forest Painting koji se veze 2",
    image: "https://placehold.co/800x500",
    category: "nature",
    author: "ivan",
    description: "Inspired by Forest",
    photoId: 1,
  },
  {
    id: 6,
    type: "artwork",
    title: "Forest Painting koji se veze 3",
    image: "https://placehold.co/800x500",
    category: "nature",
    author: "ivan",
    description: "Inspired by Forest",
    photoId: 1,
  },
  {
    id: 7,
    type: "artwork",
    title: "Forest Painting koji se veze 4",
    image: "https://placehold.co/800x500",
    category: "nature",
    author: "ivan",
    description: "Inspired by Forest",
    photoId: 1,
  },
  {
    id: 8,
    type: "artwork",
    title: "Forest Painting koji se veze 5",
    image: "https://placehold.co/800x500",
    category: "nature",
    author: "ivan",
    description: "Inspired by Forest",
    photoId: 1,
  },
  {
    id: 9,
    type: "artwork",
    title: "Forest Painting koji se veze 6",
    image: "https://placehold.co/800x500",
    category: "nature",
    author: "ivan",
    description: "Inspired by Forest",
    photoId: 1,
  },
  {
    id: 10,
    type: "artwork",
    title: "Forest Painting koji se veze 7",
    image: "https://placehold.co/800x500",
    category: "nature",
    author: "ivan",
    description: "Inspired by Forest",
    photoId: 1,
  },
  {
    id: 11,
    type: "photography",
    title: "Forest Painting koji se veze 8",
    image: "https://placehold.co/800x500",
    category: "nature",
    author: "ivan",
    description: "Inspired by Forest",
    photoId: 1,
  },

];
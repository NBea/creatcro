import NatureImg1 from "../assets/artwork/Bruno.jpg";

export type User = {
  id: number;
  username: string;
  password: string;
  avatar?: string;
  about: string;
};

export const users: User[] = [
  { id: 1, username: "Nika", 
    password: "1234",  
    avatar: NatureImg1, 
    about: "My name is Nika and I'm from Croatia.",
  },
  { id: 2, username: "ivan", 
    password: "abcd",  
    avatar: "https://placehold.co/100x100",
    about: "My name is Ivan and I'm from Spain.",
  },
];
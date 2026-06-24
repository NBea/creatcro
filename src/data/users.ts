import NatureImg1 from "../assets/NaturePhotography1.jpg";

export type User = {
  id: number;
  username: string;
  password: string;
  avatar?: string;
  about: string;
};

export const users: User[] = [
  { id: 1, username: "ana", 
    password: "1234",  
    avatar: NatureImg1, 
    about: "My name is Ana and I'm from Canada.",
  },
  { id: 2, username: "ivan", 
    password: "abcd",  
    avatar: "https://placehold.co/100x100",
    about: "My name is Ivan and I'm from Spain.",
  },
];
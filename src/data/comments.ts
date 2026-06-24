export type Comment = {
  id: number;
  postId: number;
  authorId: number;
  text: string;
};

export const comments: Comment[] = [
  {
    id: 1,
    postId: 1,
    authorId: 2,
    text: "This is amazing!",
  },
  {
    id: 2,
    postId: 1,
    authorId: 1,
    text: "Love the mood!",
  },
  {
    id: 3,
    postId: 3,
    authorId: 1,
    text: "Great artwork!",
  },
];
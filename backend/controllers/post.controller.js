const posts = [
  {
    id: 1,
    title: "Prvi post",
    image: "https://placehold.co/600x400"
  },
  {
    id: 2,
    title: "Drugi post",
    image: "https://placehold.co/600x400"
  }
];

const getPosts = (req, res) => {
  res.json(posts);
};

module.exports = { getPosts };
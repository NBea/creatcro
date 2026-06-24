const express = require("express");
const cors = require("cors");

const postsRoutes = require("./routes/post.routes");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/posts", postsRoutes);

app.listen(3001, () => {
  console.log("Server running on 3001");
});
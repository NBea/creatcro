import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Challenge from "./pages/Challenge";
import Navbar from "./components/layout/Navbar/Navbar";
import MouseTrail from "./components/Effects/MouseTrail/MouseTrail";
import Footer from "./components/layout/Footer/Footer";
import PostDetails from "./pages/PostDetails";
import ScrollToTop from "./components//Effects/ScrollToTop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <MouseTrail />
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/challenge/post/:id" element={<PostDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/register" element={<Register />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
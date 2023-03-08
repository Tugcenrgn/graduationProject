<<<<<<< Updated upstream
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//pages
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact"
//Components
import {Header, Footer} from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/homePage/Home";

console.log("hello world!");

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
>>>>>>> Stashed changes
  );
}

export default App;

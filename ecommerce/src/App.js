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
  );
}

export default App;

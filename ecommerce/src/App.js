import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import {Home, Contact, Register, Login, Reset, Cart, SingleProduct} from "./pages";

console.log("hello world!");

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products/:id" element={<SingleProduct/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/reset" element={<Reset/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cart/:id?" element={<Cart/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

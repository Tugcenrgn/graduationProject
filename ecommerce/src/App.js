import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import {Home, Contact, AboutUs, Register, Login, Reset, Cart, SingleProduct, ProfileScreen, ShippingPage, PaymentPage, PlaceorderPage, Orders} from "./pages";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search/:keyword" element={<Home/>} />
          <Route path="/products/:id" element={<SingleProduct/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/reset" element={<Reset/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="/cart/:id?" element={<Cart/>} />
          <Route path="/profile" element={<ProfileScreen/>} />
          <Route path="/shipping" element={<ShippingPage/>} />
          <Route path="/payment" element={<PaymentPage/>} />
          <Route path="/placeorder" element={<PlaceorderPage/>} />
          <Route path="/order/:id" element={<Orders/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

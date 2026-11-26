import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Header />
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

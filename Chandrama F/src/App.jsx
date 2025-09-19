import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;

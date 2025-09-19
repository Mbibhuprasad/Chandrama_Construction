import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="w-full bg-black shadow-md px-10 py-2 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <motion.div
        className="text-2xl font-bold text-gold-500 cursor-pointer"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">
          <img
            src="/logo-chndrama-1.png"
            alt="chandrama logo"
            className="w-18 h-16"
          />
        </Link>
      </motion.div>

      {/* Nav Links */}
      <ul className="flex items-center space-x-6">
        {navLinks.map((link, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1, color: "#FFD700" }} // gold hover
            transition={{ type: "spring", stiffness: 300 }}
            className={`cursor-pointer font-medium transition-colors duration-300 ${
              location.pathname === link.path
                ? "text-yellow-400" // active link = gold
                : "text-gray-300 hover:text-yellow-400"
            }`}
          >
            <Link to={link.path}>{link.name}</Link>
          </motion.li>
        ))}

        {/* Auth Buttons */}
        {!user ? (
          <>
            <motion.li whileHover={{ scale: 1.05 }}>
              <Link to="/login">
                <button className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                  Login
                </button>
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <Link to="/signup">
                <button className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                  Signup
                </button>
              </Link>
            </motion.li>
          </>
        ) : (
          <motion.li whileHover={{ scale: 1.05 }} onClick={() => logout()}>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300">
              Logout
            </button>
          </motion.li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

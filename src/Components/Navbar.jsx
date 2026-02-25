import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Our Products", path: "/products" },
    { name: "Services", path: "/services" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setIsScrolled(window.scrollY > 10);
      } else {
        setIsScrolled(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3 md:py-4"
          : "py-5 md:py-6"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className={`h-16 w-auto transition-transform duration-300 ${
              isScrolled ? "scale-90" : "scale-100"
            }`}
          />
        </Link>

        
        <div className="hidden md:flex items-center gap-8 lg:gap-12 font-semibold">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="relative text-gray-700 text-sm md:text-base font-medium transition-colors duration-300 group hover:text-blue-600"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full bg-blue-600 transition-all duration-300" />
            </Link>
          ))}

          <Link
            to="/contact"
            className="bg-gray-800 text-white px-5 py-2 rounded-full text-sm md:text-base font-medium hover:bg-blue-600 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center ml-4">
          <button className="bg-gray-800 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-600 transition-all duration-300">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <svg
            onClick={() => setIsMenuOpen(true)}
            className="h-6 w-6 cursor-pointer text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 text-gray-800 font-semibold text-lg transition-transform duration-500 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 hover:text-red-500"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>

        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-600 transition"
          >
            {link.name}
          </Link>
        ))}

        <Link
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Contact Us
        </Link>

        <button className="bg-gray-800 text-white px-8 py-2.5 rounded-full hover:bg-blue-600 transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
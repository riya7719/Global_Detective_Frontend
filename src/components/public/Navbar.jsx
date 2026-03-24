import React from "react";
import logo from "../../assets/Global.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
<nav className="sticky top-0 z-50 w-full bg-gradient-to-r bg-[#0b1120] via-[#07181f] to-[#7a1d2a] px-4 sm:px-6 md:px-10 py-4">
      <div className="flex items-center justify-between">

        {/* LEFT - LOGO */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
          <div className="text-white leading-tight">
            <h1 className="text-base md:text-lg font-semibold">
              Universal Detsective
            </h1>
            <p className="text-xs md:text-sm text-gray-300">PVT LTD</p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center bg-[#0e2a36] rounded-xl px-6 py-2 space-x-8 border border-gray-500/30 shadow-md">

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[#e5dcd3] text-black px-5 py-2 rounded-lg font-medium"
          >
            Home
          </button>

          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="text-white hover:text-gray-300 transition"
          >
            About us
          </button>

          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="text-white hover:text-gray-300 transition"
          >
            Services
          </button>

          <button
            onClick={() => document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" })}
            className="text-white hover:text-gray-300 transition"
          >
            Blog
          </button>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-white hover:text-gray-300 transition"
          >
            Contact
          </button>
        </div>
       

        {/* RIGHT BUTTON - DESKTOP */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate('/login')}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl font-medium transition"
          >
            Login/ Register
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-[#0e2a36] rounded-xl p-5 space-y-4 border border-gray-500/30 shadow-lg transition-all duration-300">

          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsOpen(false);
            }}
            className="block w-full text-left bg-[#e5dcd3] text-black px-4 py-2 rounded-lg font-medium"
          >
            Home
          </button>

          <button
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              setIsOpen(false);
            }}
            className="block w-full text-left text-white hover:text-gray-300"
          >
            About us
          </button>

          <button
            onClick={() => {
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              setIsOpen(false);
            }}
            className="block w-full text-left text-white hover:text-gray-300"
          >
            Services
          </button>

          <button
            onClick={() => {
              document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
              setIsOpen(false);
            }}
            className="block w-full text-left text-white hover:text-gray-300"
          >
            Blog
          </button>

          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              setIsOpen(false);
            }}
            className="block w-full text-left text-white hover:text-gray-300"
          >
            Contact
          </button>

          <button
            onClick={() => navigate('/login')}
            className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl font-medium transition"
          >
            Login/ Register
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React, { useState } from "react";
import { NavLink } from "react-router";
import logoBook from "../assets/logobook.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = "hover:text-blue-500 transition duration-200";

  return (
    <nav className="bg-[#FDF8EE] ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Left side brand/title */}
          <div className="text-xl font-bold flex gap-2 items-center">
            <img src={logoBook} alt="logoBook" />
            <span>Book Store</span>
          </div>

          {/* Right side menu, sign-in button & logo */}
          <div className="hidden md:flex items-center text-[15px] gap-4 font-semibold">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink className={navLinkClass}>About Us</NavLink>
            <NavLink className={navLinkClass}>Courses</NavLink>
            <NavLink className={navLinkClass}>Our Services</NavLink>
            <NavLink className={navLinkClass}>Contact</NavLink>
            <button className="px-4 py-2 bg-[purple] text-white rounded-full">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col justify-center items-center gap-2 pb-4 font-semibold">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink className={navLinkClass}>About</NavLink>
            <NavLink className={navLinkClass}>Services</NavLink>
            <NavLink className={navLinkClass}>Contact</NavLink>
            <button className="mt-2 px-4 py-2 bg-[purple] text-white rounded-full w-full  ">
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

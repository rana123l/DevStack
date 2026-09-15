import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm py-4 shadow-sm">
      <div className="flex items-center justify-between w-[95%] sm:w-[90%] lg:w-[80%] mx-auto">
        
        {/*Hamburger */}
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-2xl text-slate-700"
            aria-label="Toggle menu"
          >
            <FiMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-2xl z-50 mt-3 w-52 p-3 shadow-xl border border-slate-100 font-medium text-slate-700"
          >
            <li className="text-[#DB2777] font-semibold">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#technologies">Technologies</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Brand Logo */}
        <div className="flex items-center">
          <img
            src="/assets/logo-text.png"
            alt="Dev Stack Logo"
            className="w-28 md:w-32 h-auto cursor-pointer"
          />
        </div>

        {/* Center Nav Links */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-10 font-medium text-slate-600">
            <li className="cursor-pointer text-[#DB2777] hover:text-[#DB2777] transition-colors">
              Home
            </li>
            <li className="cursor-pointer hover:text-[#DB2777] transition-colors">
              Technologies
            </li>
            <li className="cursor-pointer hover:text-[#DB2777] transition-colors">
              Projects
            </li>
            <li className="cursor-pointer hover:text-[#DB2777] transition-colors">
              About
            </li>
            <li className="cursor-pointer hover:text-[#DB2777] transition-colors">
              Contact
            </li>
          </ul>
        </div>

        {/* Sign In & Sign Up */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="btn btn-ghost text-xs sm:text-sm font-medium text-slate-700 px-2 sm:px-4">
            Sign In
          </button>
          <button className="btn rounded-full bg-[#DB2777] hover:bg-[#be185d] text-white border-none text-xs sm:text-sm px-4 sm:px-6 shadow-sm">
            Sign Up
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
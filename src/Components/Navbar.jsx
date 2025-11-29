import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const path = location.pathname;
  const isHome = path === "/" || path === "/home";
  const isAbout = path === "/aboutus";

  const handleScroll = () => {
    if (window.scrollY > 120) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Navbar background color logic
  const navBgClass = isAbout
    ? "bg-zinc-950 text-white shadow-md backdrop-blur"
    : isHome
    ? isScrolled
      ? "bg-white/95 text-slate-900 shadow-md backdrop-blur"
      : "bg-transparent text-white shadow-none"
    : isScrolled
    ? "bg-white/95 text-slate-900 shadow-md backdrop-blur"
    : "bg-gradient-to-r from-pink-500 to-red-600 text-white shadow-none";

  const linkBaseClasses =
    "transition-colors duration-200 text-sm font-medium hover:font-semibold";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${navBgClass} transition-all duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <div className="text-left leading-tight">
            <div className="text-xl sm:text-2xl font-extrabold tracking-[0.18em]">
              <span
                className={
                  isAbout
                    ? "text-white"
                    : isScrolled && isHome
                    ? "text-slate-900"
                    : "text-white"
                }
              >
                PRINT
              </span>
            </div>
            <div className="text-sm sm:text-base font-semibold tracking-[0.25em]">
              <span
                className={
                  isAbout
                    ? "text-white"
                    : isScrolled && isHome
                    ? "text-slate-900"
                    : "text-white"
                }
              >
                E
              </span>
              <span className="text-red-600">X</span>
              <span
                className={
                  isAbout
                    ? "text-white"
                    : isScrolled && isHome
                    ? "text-slate-900"
                    : "text-white"
                }
              >
                P
              </span>
              <span
                className={
                  isAbout
                    ? "text-white"
                    : isScrolled && isHome
                    ? "text-slate-900"
                    : "text-white"
                }
              >
                R
              </span>
              <span
                className={
                  isAbout
                    ? "text-white"
                    : isScrolled && isHome
                    ? "text-slate-900"
                    : "text-white"
                }
              >
                E
              </span>
              <span
                className={
                  isAbout
                    ? "text-white"
                    : isScrolled && isHome
                    ? "text-slate-900"
                    : "text-white"
                }
              >
                S
              </span>
              <span
                className={
                  isAbout
                    ? "text-white"
                    : isScrolled && isHome
                    ? "text-slate-900"
                    : "text-white"
                }
              >
                S
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center space-x-6">
          <Link className={linkBaseClasses} to="/">
            Home
          </Link>
          <Link className={linkBaseClasses} to="/service">
            Service
          </Link>
          <Link className={linkBaseClasses} to="/project">
            Project
          </Link>
          <Link className={linkBaseClasses} to="/career">
            Career
          </Link>
          <Link className={linkBaseClasses} to="/infra">
            Infra
          </Link>
          <Link className={linkBaseClasses} to="/aboutus">
            About Us
          </Link>

          {/* Cart Icon */}
          <div className="flex justify-center md:block mt-0">
            <Link
              className={`relative transition-colors duration-300 transform hover:opacity-80 ${
                isAbout || (isScrolled && isHome)
                  ? "text-slate-800"
                  : "text-white"
              }`}
              to="#"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute -top-1 -right-1 px-1.5 text-[10px] text-white bg-red-500 rounded-full">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className={`focus:outline-none ${
              isAbout || (isScrolled && isHome)
                ? "text-slate-900"
                : "text-white"
            }`}
            aria-label="toggle menu"
          >
            <svg
              className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>
            <svg
              className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden w-full px-6 pt-2 pb-4 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        } bg-white shadow-md border-t border-slate-100`}
      >
        <div className="flex flex-col text-slate-800">
          <Link
            className="my-2 text-sm font-medium transition-colors duration-200 hover:text-red-500"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className="my-2 text-sm font-medium transition-colors duration-200 hover:text-red-500"
            to="/service"
            onClick={() => setIsOpen(false)}
          >
            Service
          </Link>
          <Link
            className="my-2 text-sm font-medium transition-colors duration-200 hover:text-red-500"
            to="/project"
            onClick={() => setIsOpen(false)}
          >
            Project
          </Link>
          <Link
            className="my-2 text-sm font-medium transition-colors duration-200 hover:text-red-500"
            to="/career"
            onClick={() => setIsOpen(false)}
          >
            Career
          </Link>
          <Link
            className="my-2 text-sm font-medium transition-colors duration-200 hover:text-red-500"
            to="/infra"
            onClick={() => setIsOpen(false)}
          >
            Infra
          </Link>
          <Link
            className="my-2 text-sm font-medium transition-colors duration-200 hover:text-red-500"
            to="/aboutus"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
        </div>

        {/* Cart Icon */}
        <div className="flex justify-center mt-3">
          <Link
            className="relative text-slate-700 transition-colors duration-300 transform hover:text-red-500"
            to="#"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute -top-1 -right-1 px-1.5 text-[10px] text-white bg-red-500 rounded-full">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgClass, setBgClass] = useState('bg-white'); // Initial background class

  const handleScroll = () => {
    if (window.scrollY > 900) { // Adjust the threshold as needed
      setBgClass('bg-white');
    } else {
      setBgClass('bg-gradient-to-r from-pink-500 to-red-600 text-white');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 shadow ${bgClass}`}>
      <div className="container mx-auto px-6 py-1 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-center">
          <div className="text-2xl font-bold tracking-widest flex flex-col items-start">
            <div>
              <span className=" ">PRINT</span>
            </div>
            <div>
              <span>E</span><span className="text-red-600 border-black">X</span>P<span>R</span><span>E</span><span>S</span><span>S</span>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center space-x-6">
          <Link className=" transition-colors duration-300 transform hover:font-bold" to="/">Home</Link>
          <Link className=" transition-colors duration-300 transform hover:font-bold" to="/service">Service</Link>
          <Link className=" transition-colors duration-300 transform hover:font-bold" to="/project">Project</Link>
          <Link className=" transition-colors duration-300 transform hover:font-bold" to="/infra">Infra</Link>
          <Link className=" transition-colors duration-300 transform hover:font-bold" to="/aboutus">About Us</Link>

          {/* Cart Icon */}
          <div className="flex justify-center md:block mt-0">
            <Link className="relative  transition-colors duration-300 transform hover:text-gray-600" to="#">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="absolute top-0 left-0 p-1 text-xs text-white bg-red-500 rounded-full"></span>
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-white-500 hover:text-white-600 focus:outline-none"
            aria-label="toggle menu"
          >
            <svg
              className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
            <svg
              className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Hidden on Desktop */}
      <div
        className={`md:hidden absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex flex-col">
          <Link className="my-2 text-black transition-colors duration-300 transform hover:text-red-500" to="/">Home</Link>
          <Link className="my-2 text-black transition-colors duration-300 transform hover:text-red-500" to="/service">Service</Link>
          <Link className="my-2 text-black transition-colors duration-300 transform hover:text-red-500" to="/project">Project</Link>
          <Link className="my-2 text-black transition-colors duration-300 transform hover:text-red-500" to="/infra">Infra</Link>
          <Link className="my-2 text-black transition-colors duration-300 transform hover:text-red-500" to="/aboutus">About Us</Link>
        </div>

        {/* Cart Icon */}
        <div className="flex justify-center md:block mt-4">
          <Link className="relative text-gray-700 transition-colors duration-300 transform hover:text-gray-600" to="#">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute top-0 left-0 p-1 text-xs text-white bg-red-500 rounded-full"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

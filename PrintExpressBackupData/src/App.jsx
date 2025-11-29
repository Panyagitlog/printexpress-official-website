import { Routes, Route, useLocation } from "react-router-dom"; // Import necessary components from react-router-dom
import "./App.css"; // Import your CSS file
import { motion, useScroll } from "framer-motion"; // Import motion for animations
import { useState, useEffect } from "react"; // Import hooks from React

import { Review } from "./Components/Review"; // Import your components
import { Footer } from "./Components/Footer";
import { Aboutus } from "./Components/Aboutus";
import { Fquestion } from "./Components/Fquestion";
import { Testimonials } from "./Components/Testimonials";
import { Logos } from "./Components/Logos";
import { Feature } from "./Components/Feature";
import Brochured from "./Components/Services/Brochured";
import Businesscards from "./Components/Services/Businesscards";
import Paperinsert from "./Components/Services/Paperinsert";
import Paperbags from "./Components/Services/Paperbags";
import Sidebranding from "./Components/Services/Sidebranding";
import Postersandbanners from "./Components/Services/Postersandbanners";
import Leaflets from "./Components/Services/Leaflets";
import Eventinvitations from "./Components/Services/Eventinvitations";
import Corporatestationery from "./Components/Services/Corporatestationery";
import Promotionalmaterials from "./Components/Services/Promotionalmaterials";
import Menuprinting from "./Components/Services/Menuprinting";
import Folders from "./Components/Services/Folders";
import Filefolders from "./Components/Services/Filefolders";
import Stickersandlabels from "./Components/Services/Stickersandlabels";
import Custompackaging from "./Components/Services/Custompackaging";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Numbers from "./Components/Numbers";
import Herosection from "./Components/Herosection";
import WhatsApplogo from "./Components/Whatsapplogo";
import { Howwedoit } from "./Components/Howwedoit";
import { Backtopbtn } from "./Components/Backtopbtn";
import Infra from "./Components/Infra";
import { TypeAnimation } from "react-type-animation";
import { Mail } from "./Components/Mail";
import Contact from "./Components/Contact";
import Quickmenu from "./Components/Quickmenu";
import Loading from "./Components/Loading"; // Import the loading component
import MagnifyingCircle from "./Components/MagnifyingCircle";

function App() {
  const location = useLocation(); // Hook to get the current location
  const { scrollYProgress } = useScroll(); // Get scroll position
  const [loading, setLoading] = useState(true); // State to control loading

  // Function to handle route changes
  const handleRouteChange = (newLocation) => {
    console.log("Route changed to:", newLocation.pathname);
    // You can add analytics tracking or any other logic here
  };

  // Effect to handle loading simulation and route change
  useEffect(() => {
    handleRouteChange(location); // Call the function whenever the route changes

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a delay
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [location]); // Run this effect whenever 'location' changes

  if (loading) {
    return <Loading />; // Show loading screen while loading
  }

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          height: "5px", // Height of the scroll bar
          backgroundColor: "#F44336", // Color of the scroll bar
          position: "fixed", // Fix it to the top of the page
          top: 0, // Make sure it stays at the top
          left: 0, // Start from the left side
          right: 0, // End at the right side
          transformOrigin: "0%", // Make sure it expands from left to right
          zIndex: 99, // Ensure it stays above other content
        }}
      />
         
         <MagnifyingCircle/>
      {/* Your existing content */}
      <div>
        <WhatsApplogo />
        <Backtopbtn />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Herosection />
              <Logos />
              <Feature />
              <Howwedoit />
              <Numbers />
              <Review />
              <Fquestion />
              <Footer />
            </>
          }
        />
        <Route
          path="/service"
          element={
            <>
              <Navbar />
              <Home />
              <div className="my-6 border-t border-gray-300"></div>
              <Brochured />
              <div className="my-6 border-t border-gray-300"></div>
              <Paperinsert />
              <div className="my-6 border-t border-gray-300"></div>
              <Sidebranding />
              <div className="my-6 border-t border-gray-300"></div>
              <Postersandbanners />
              <div className="my-6 border-t border-gray-300"></div>
              <Leaflets />
              <div className="my-6 border-t border-gray-300"></div>
              <Eventinvitations />
              <div className="my-6 border-t border-gray-300"></div>
              <Corporatestationery />
              <div className="my-6 border-t border-gray-300"></div>
              <Promotionalmaterials />
              <div className="my-6 border-t border-gray-300"></div>
              <Menuprinting />
              <div className="my-6 border-t border-gray-300"></div>
              <Folders />
              <div className="my-6 border-t border-gray-300"></div>
              <Paperbags />
              <div className="my-6 border-t border-gray-300"></div>
              <Filefolders />
              <div className="my-6 border-t border-gray-300"></div>
              <Stickersandlabels />
              <div className="my-6 border-t border-gray-300"></div>
              <Businesscards />
              <div className="my-6 border-t border-gray-300"></div>
              <Custompackaging />
              <Footer />
            </>
          }
        />
        <Route
          path="/aboutus"
          element={
            <>
              <Navbar />
              <Contact />
              <Testimonials />
              <Aboutus />
              <Mail />
              <Footer />
            </>
          }
        />
        <Route
          path="/project"
          element={
            <>
              <Navbar />
              <Quickmenu />
              <div className="mt-80 mb-80 flex flex-col items-center justify-center">
                <h2 className="text-center text-yellow-600 font-bold">
                  Project Section in Progress: Our New Website is Coming Soon!
                </h2>
                <TypeAnimation
                  className="text-4xl font-bold mb-4 text-center text-blue-600"
                  sequence={[
                    "Printing simplified,",
                    1000,
                    "Customized, and executed",
                    2000,
                    "Perfection for you.",
                    () => {
                      console.log("Sequence completed");
                    },
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{
                    fontSize: "2em",
                    display: "inline-block",
                    fontWeight: "bold",
                  }}
                />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/infra"
          element={
            <>
              <Navbar />
              <h1 className="justify-center mt-60 mb-10 text-2xl text-center text-red-600 font-extrabold">
                Infrastructure Section in Progress
              </h1>
              <Infra />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;

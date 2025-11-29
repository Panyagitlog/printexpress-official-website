// import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaRocket } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Herosection = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-pink-500 to-red-600">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-center flex-grow">
          {/* Left Side: Text */}
          <div className="mt-20 text-center md:text-left max-w-lg p-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Your Printing Partner for Exceptional Quality
            </h1>
            <p className="text-white mt-4 text-lg">
              Book your 30-minute free strategy call
            </p>
            <button
              onClick={() => (window.location.href = "/aboutus")}
              className="mt-6 bg-white text-red-600 border-2 border-red-600 px-6 py-3 rounded-md font-bold transition-all duration-300 hover:bg-red-600 hover:text-white"
            >
              Book Now
            </button>
          </div>

          {/* Right Side: 3D Character or Image */}
          <div className="mt-10 md:mt-0">
            <motion.img
              src="https://i.ibb.co/5L0PKBj/Untitled-design.png"
              alt="3D Character"
              className="w-full max-w-md"
              // Apply up-and-down animation
              animate={{ y: [0, -10, 0] }} // Move up and down
              transition={{
                duration: 4, // Total duration for the animation
                ease: "easeInOut",
                repeat: Infinity, // Repeat indefinitely
                repeatType: "loop", // Loop type
              }}
            />
          </div>
        </section>
      </div>

      {/* Another Section */}
      <section className="max-w-screen-2xl m-auto w-full grid grow gap-4 px-0 sm:px-0 md:grid-cols-2 md:flex-row lg:gap-6 lg:px-0 xl:px-0">
        <div className="mt-6 flex flex-1 flex-col items-start gap-12 pb-6 md:my-20 lg:my-44 lg:pb-0 pl-3 sm:pl-8 lg:pl-16 xl:pl-32">
          <span className="mt-20 inline-flex rounded-[64px] border text-center font-semibold transition-all duration-300 ease-in-out h-7 px-3 py-1 text-sm border-gray-900 bg-red-500 text-white">
            Print Express...
            <FaRocket />
          </span>
          <div className="mt-4 flex max-w-lg flex-col gap-6">
            <TypeAnimation
              sequence={[
                "Transform Your Ideas,",
                1000,
                "Into Reality with Precision",
                2000,
                "Printing Solutions!",
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
            <h4 className="text-lg font-normal leading-7 text-slate-500">
              High-quality, eco-friendly printing solutions tailored to your
              needs.
            </h4>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => (window.location.href = "/service")}
              aria-disabled="true"
              className="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed bg-red-500 stroke-white px-6 text-white hover:bg-red-550 h-[42px] min-w-[42px] gap-2 disabled:bg-slate-100 disabled:stroke-red-400 disabled:text-red-400 disabled:hover:bg-red-500"
            >
              Get a Service
            </button>
            <button
              type="button"
              onClick={() => (window.location.href = "/aboutus")}
              aria-disabled="false"
              className="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-blue-700 px-2 text-red-500 h-[42px] min-w-[42px] gap-2 disabled:stroke-red-400 disabled:text-red-400 hover:stroke-red-950 hover:text-red-550"
            >
              See More
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#EF4444"
                strokeWidth="1.5"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 stroke-inherit"
              >
                <path
                  d="M11 16L15 12L11 8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <circle cx="12" cy="12" r="9" stroke="#EF4444"></circle>
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <img
            className="mt-0 w-90 h-90 lg:max-w-2xl transition-all duration-300 hover:scale-110"
            src="https://cdn.leonardo.ai/users/78faae4f-f653-4cca-b64e-23416f927713/generations/5535ae58-b3fa-4d8e-b520-21dd330f0484/Leonardo_Phoenix_Create_a_detailed_technical_diagram_of_a_four_3.jpg"
            alt="Catalogue-pana.svg"
          />
        </div>
      </section>
    </>
  );
};

export default Herosection;

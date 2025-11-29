// import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import Ininmage from "./Images/GeminiHomo.png"; // <-- replace with your image path

const Herosection = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="relative min-h-screen w-screen overflow-hidden bg-gradient-to-r from-pink-500 to-red-600">
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

        <section className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-24 pb-16 gap-10">
          {/* LEFT SIDE: TEXT */}
          <motion.div
            className="mt-6 md:mt-0 text-center md:text-left max-w-xl space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs sm:text-sm font-medium text-white shadow-sm shadow-red-900/40">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-[10px] text-red-600">
                <FaRocket />
              </span>
              Print Express – Premium Printing Studio
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
              Your Printing Partner for
              <span className="block text-yellow-200">
                Exceptional Quality & Impact
              </span>
            </h1>

            {/* Animated Subtext */}
            <TypeAnimation
              sequence={[
                "Business cards that stand out.",
                1400,
                "Brochures that tell your story.",
                1400,
                "Packaging that elevates your brand.",
                1800,
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
              className="text-sm sm:text-base md:text-lg font-medium text-pink-100 mt-2"
            />

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base text-pink-50/90 max-w-md md:max-w-lg mx-auto md:mx-0">
              High-quality, eco-friendly printing solutions crafted for brands,
              events, and businesses that want every print to feel premium.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => (window.location.href = "tel:+918766912880")}
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-red-600 shadow-md shadow-red-900/40 transition-all duration-300 hover:bg-pink-50 hover:shadow-lg hover:shadow-red-900/50 active:scale-[0.98]"
              >
                Book Free 30-min Strategy Call
              </button>

              <button
                onClick={() => (window.location.href = "/service")}
                className="inline-flex items-center justify-center rounded-lg border border-white/70 bg-white/5 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/15 hover:border-white"
              >
                Explore Services
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1.5"
                >
                  <path
                    d="M11 16L15 12L11 8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <circle cx="12" cy="12" r="9"></circle>
                </svg>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs sm:text-sm text-pink-50/90">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                <span>Fast turnaround for urgent orders</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-yellow-200" />
                <span>Eco-conscious materials & inks</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: IMAGE */}
          <motion.div
            className="relative mt-8 md:mt-0 flex w-full md:w-1/2 lg:w-[52%] justify-center md:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <motion.img
              src={Ininmage}
              alt="Print Express 3D Illustration"
              className="w-[72%] sm:w-[80%] md:w-[90%] max-w-[420px] object-contain drop-shadow-[0_26px_45px_rgba(0,0,0,0.6)]"
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            />

            {/* Glow behind image */}
            <div className="pointer-events-none absolute inset-x-6 bottom-0 h-24 rounded-full bg-white/25 blur-3xl" />

            {/* Stats Card */}
            <motion.div
              className="absolute -bottom-2 left-4 sm:left-10 rounded-2xl border border-white/40 bg-white/15 px-4 py-3 text-xs sm:text-sm text-white backdrop-blur-md shadow-xl shadow-black/40"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="font-semibold">10,000+ Prints Delivered</p>
              <p className="text-[11px] sm:text-xs text-pink-50/90">
                For businesses, events, and brands across Pune and beyond.
              </p>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex -space-x-1">
                  <span className="h-5 w-5 rounded-full bg-white/90" />
                  <span className="h-5 w-5 rounded-full bg-pink-200/90" />
                  <span className="h-5 w-5 rounded-full bg-red-200/90" />
                </div>
                <span className="text-[11px] sm:text-xs text-yellow-200">
                  ★ 4.9/5 client satisfaction
                </span>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Herosection;

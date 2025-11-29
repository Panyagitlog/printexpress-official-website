// import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Ininmage from "./Images/GeminiHomo2.png"; // 3D illustration

const Career = () => {
  // Function to open default email app
  const handleEmailClick = () => {
    window.location.href =
      "mailto:Printxpressonline24@gmail.com?subject=Resume for Career Opportunity&body=Hello Print Express Team,%0D%0A%0D%0AI am interested in applying for a career opportunity at Print Express. Please find my resume attached.%0D%0A%0D%0AThank you,%0D%0A[Your Name]";
  };

  return (
    <section
      id="career"
      className="w-full bg-gradient-to-r from-red-50 via-white to-red-50 py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 grid gap-10 md:grid-cols-2 items-center">
        {/* LEFT: TEXT CONTENT */}
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
            Careers at Print Express
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Grow Your Career <br className="hidden md:block" />
            with <span className="text-red-600">Print Express</span>
          </h2>

          <p className="text-slate-600 text-sm md:text-base max-w-xl">
            Join a fast-growing print solutions company where creativity,
            technology, and quality come together. Work on real projects for
            real brands and be part of a team that values innovation and
            attention to detail.
          </p>

          {/* HIGHLIGHTS */}
          <div className="grid gap-3 text-sm md:text-base text-slate-700">
            <div className="flex items-start gap-2">
              <FaCheckCircle className="mt-0.5 text-red-500" />
              <span>Opportunities in design, operations, marketing, and sales.</span>
            </div>
            <div className="flex items-start gap-2">
              <FaCheckCircle className="mt-0.5 text-red-500" />
              <span>Hands-on exposure to modern printing technology.</span>
            </div>
            <div className="flex items-start gap-2">
              <FaCheckCircle className="mt-0.5 text-red-500" />
              <span>Supportive environment for freshers and learners.</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={() => (window.location.href = "/career")}
              className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-300 transition-all duration-300 hover:bg-red-600"
            >
              View Open Roles
              <FaArrowRight className="text-xs" />
            </button>

            <button
              type="button"
              onClick={handleEmailClick}
              className="inline-flex items-center gap-2 rounded-lg border border-red-300 bg-white px-4 py-2.5 text-sm font-semibold text-red-500 transition-all duration-300 hover:bg-red-50"
            >
              Share Your Resume
            </button>
          </div>
        </div>

        {/* RIGHT: ILLUSTRATION */}
        <div className="flex justify-center md:justify-end items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl"
          >
            {/* Soft glow behind image */}
            <div className="absolute -inset-8 rounded-[32px] bg-red-500/10 blur-3xl" />

            <motion.img
              src={Ininmage}
              alt="Print Express Careers Illustration"
              className="relative object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-in-out mx-auto"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Career;

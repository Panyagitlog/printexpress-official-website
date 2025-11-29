// // import React from 'react'

// export const Testimonials = () => {
//   return (
//     <div>
//         <section className="relative py-28 bg-red-200">
//             <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
//                 <div className="max-w-3xl mx-auto text-center">
//                     <h3 className="text-red-100 font-semibold pb-6">What people are saying</h3>
//                     <figure>
//                         <blockquote>
//                             <p className="text-white text-xl font-semibold sm:text-2xl">
//                                 “Our clients love the quality and service we provide! Hear their feedback and discover why we are their trusted printing partner.“
//                             </p>
//                         </blockquote>
//                         <div className="mt-6">
//                             <img src="https://images.pexels.com/photos/32976/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-16 h-16 mx-auto rounded-full" />
//                             <div className="mt-3">
//                                 <span className="block text-white font-semibold">Pravin Gujar</span>
//                                 <span className="block text-red-100 text-sm mt-0.5">Founder of Print Express</span>
//                             </div>
//                         </div>
//                     </figure>
//                 </div>
//             </div>
//             <div className="absolute top-0 w-full h-full" style={{ background: "linear-gradient(268.24deg, rgba(239, 68, 68, 0.76) 50%, rgba(239, 68, 68, 0.545528) 80.61%, rgba(155, 23, 28, 0) 117.35%)" }}></div>
//         </section>
//     </div>
//   )
// }

import Founder from "./Images/Founder.png";

export const Testimonials = () => {
  return (
    <section
      className="relative py-24 sm:py-28 overflow-hidden text-white"
      aria-labelledby="testimonials-title"
    >
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-red-600 via-rose-500 to-pink-500"
        aria-hidden="true"
      />

      {/* Gradient overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-600/80 via-rose-500/70 to-pink-500/60"
        aria-hidden="true"
      />

      {/* Curved white shape at bottom */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-white z-10"
        style={{ clipPath: "ellipse(75% 100% at 50% 100%)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 max-w-screen-xl mx-auto px-6 md:px-8 text-center">
        <h3
          id="testimonials-title"
          className="text-pink-100 font-semibold text-sm sm:text-base uppercase tracking-[0.2em] mb-4"
        >
          What people are saying
        </h3>

        <figure className="bg-white/10 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-12 mx-auto max-w-3xl border border-white/15">
          <blockquote>
            <p className="text-lg md:text-2xl font-semibold leading-relaxed text-pink-50">
              “Our clients love the quality and service we provide! Hear their
              feedback and discover why we are their trusted printing partner.“
            </p>
          </blockquote>

          <figcaption className="mt-8">
            <img
              src={Founder}
              alt="Portrait of Pravin Gujar, Founder of Print Express"
              loading="lazy"
              className="w-20 h-20 mx-auto rounded-full shadow-lg ring-4 ring-white/30 hover:scale-80 transition-transform duration-300 object-cover"
            />
            <div className="mt-3">
              <span className="block text-white font-semibold text-lg">
                Pravin Gujar
              </span>
              <span className="block text-pink-200 text-sm mt-0.5">
                Founder of Print Express
              </span>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

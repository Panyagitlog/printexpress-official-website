// import React from 'react'

export const Testimonials = () => {
  return (
    <div>
        <section className="relative py-28 bg-red-200">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-red-100 font-semibold pb-6">What people are saying</h3>
                    <figure>
                        <blockquote>
                            <p className="text-white text-xl font-semibold sm:text-2xl">
                                “Our clients love the quality and service we provide! Hear their feedback and discover why we are their trusted printing partner.“
                            </p>
                        </blockquote>
                        <div className="mt-6">
                            <img src="https://images.pexels.com/photos/32976/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-16 h-16 mx-auto rounded-full" />
                            <div className="mt-3">
                                <span className="block text-white font-semibold">Pravin Gujar</span>
                                <span className="block text-red-100 text-sm mt-0.5">Founder of Print Express</span>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
            <div className="absolute top-0 w-full h-full" style={{ background: "linear-gradient(268.24deg, rgba(239, 68, 68, 0.76) 50%, rgba(239, 68, 68, 0.545528) 80.61%, rgba(155, 23, 28, 0) 117.35%)" }}></div>
        </section>
    </div>
  )
}

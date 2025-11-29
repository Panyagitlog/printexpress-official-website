// import React from 'react'
import { FaCheckCircle, FaMedal, FaCog, FaLeaf, FaTruck, FaUserFriends } from 'react-icons/fa';

export const Feature = () => {
  return (
    <div>
      <section className='grid justify-items-center'>
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl">Premium-Printing Solutions</h2>

              <p className="mt-4 text-gray-600">
                Experience the finest quality printing services with cutting-edge technology and a
                focus on customer satisfaction. We deliver creative, eco-friendly, and customized
                printing solutions designed to meet your unique business needs, all with a commitment
                to excellence and timely delivery.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-red-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-400 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <FaCheckCircle className="size-6" />
                </span>
                <h2 className="mt-2 font-bold">Quality Assurance</h2>
                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Ensuring the highest standards.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <FaMedal className="size-6" />
                </span>
                <h2 className="mt-2 font-bold">Creative Expertise</h2>
                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Award-winning creativity.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <FaCog className="size-6" />
                </span>
                <h2 className="mt-2 font-bold">Cutting-Edge Technology</h2>
                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Using the latest tools and machinery.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <FaLeaf className="size-6" />
                </span>
                <h2 className="mt-2 font-bold">Environmental Responsibility</h2>
                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Eco-friendly printing solutions.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <FaTruck className="size-6" />
                </span>
                <h2 className="mt-2 font-bold">Timely Delivery</h2>
                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  On-time delivery, every time.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <FaUserFriends className="size-6" />
                </span>
                <h2 className="mt-2 font-bold">Customer-Centric Approach</h2>
                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  We prioritize your satisfaction.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

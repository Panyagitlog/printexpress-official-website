import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("subject", formData.subject);
    formDataToSubmit.append("message", formData.message);
    formDataToSubmit.append("access_key", "d062a120-0404-4cca-8d87-f1d77a1beb33");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Form Submitted Successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setResult(data.message || "❌ Something went wrong. Try again.");
      }
    } catch (error) {
      setResult("❌ An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <>
      {/* ======= Section Title ======= */}
      <div className="text-center mt-28 mb-10">
        <h2 className="text-4xl md:text-4xl font-extrabold text-zinc-800 mb-3">
          Contact <span className="text-red-600">Us</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have questions about printing,
          custom packaging, or want to discuss a project — let’s connect.
        </p>
        <div className="mt-4 flex justify-center">
          <span className="block w-24 h-1 bg-gradient-to-r from-pink-500 to-red-600 rounded-full"></span>
        </div>
      </div>

      {/* ======= Contact Section ======= */}
      <div className="mb-20 flex items-center justify-center min-h-screen bg-[#ffffff]">
        <div className="font-sans flex flex-col lg:flex-row w-full max-w-6xl bg-white rounded-lg shadow-md">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 p-10">
            <img
              className="rounded-lg shadow-sm"
              src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop"
              alt="Printing Service"
            />
            <h2 className="mt-4 text-4xl font-semibold mb-4 pl-2 my-2 border-l-4 border-red-400 font-sans">
              Let’s Discuss Your Printing Project.
            </h2>
            <p className="text-xl font-light mb-4">
              Whether it’s custom packaging, promotional materials, business
              cards, or banners, we can bring your ideas to life.
            </p>
            <p className="text-md font-light text-gray-600 mb-8">
              Reach out to us with your printing needs, and let’s create
              something exceptional together.
            </p>
            <div className="flex items-center">
              <a
                href="mailto:Printxpressonline24@gmail.com"
                className="text-blue-600 hover:underline"
              >
                <span className="text-black font-semibold">
                  Contact Information: Mail us at:
                </span>{" "}
                Printxpressonline24@gmail.com
              </a>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="w-full lg:w-1/2 bg-gradient-to-r from-pink-500 to-red-600 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 mt-10">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 outline-none"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 outline-none"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-white">
                  Services*
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 outline-none"
                  placeholder="Services you want"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white">
                  Tell us more about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 outline-none"
                  placeholder="Type your message"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-white text-red-500 font-semibold rounded-md hover:bg-gray-100 transition"
              >
                Send Message
              </button>
            </form>
            <span className="block text-white mt-4">{result}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

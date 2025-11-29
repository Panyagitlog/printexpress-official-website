import { FaCircleArrowUp } from "react-icons/fa6";

export const Backtopbtn = () => {
  const handleClick = () => {
    // Scroll back to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div className="fixed bottom-6 left-5 text-4xl">
      {" "}
      {/* Changed to bottom-left position */}
      <button
        className="rounded-full p-2 bg-red-500 text-white shadow-lg hover:bg-blue-600 transition"
        onClick={handleClick}
        aria-label="Back to Top"
      >
        <FaCircleArrowUp />
      </button>
    </div>
  );
};

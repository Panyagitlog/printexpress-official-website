import  { useEffect } from "react";
import anime from "animejs";
import "./Loading.css"; // Move your CSS code to a separate file

const Loading = () => {
  useEffect(() => {
    // Wrap every letter in a span
    let textWrapper = document.querySelector(".ml6 .letters");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    }

    anime.timeline({ loop: true })
      .add({
        targets: ".ml6 .letter",
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i,
      })
      .add({
        targets: ".ml6",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  }, []);

  return (
    <div className="loading-container">
      <h1 className="ml6">
        <span className="text-wrapper">
          <span className="letters">WELCOME TO PRINT EXPRESS</span>
        </span>
      </h1>
    </div>
  );
};

export default Loading;

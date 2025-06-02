import React, { useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show or hide the button depending on the scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Listen to the scroll event
  window.addEventListener("scroll", toggleVisibility);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-purple-500 text-white p-4 rounded-full shadow-lg hover:bg-purple-600 transition duration-300"
      >
        ↑ Top
      </button>
    )
  );
};

export default BackToTop;

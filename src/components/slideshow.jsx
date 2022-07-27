import React, { useEffect, useState } from "react";
import "./slideshow.css";
const images = [
  "https://itechstore.co.in/wp-content/uploads/2021/10/r1250_PDP_Image_Position-2__en-IN.jpg",
  "https://m.media-amazon.com/images/I/81-vkx81nGL._AC_SX466_.jpg",
  "https://itechstore.co.in/wp-content/uploads/2021/10/r1250_PDP_Image_Position-4__en-IN.jpg",
  "https://www.tradeinn.com/f/13847/138477370_5/apple-airpods-3rd-generation-wireless-earphones.jpg",
];
const delay = 1500;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow-container" style={{ textAlign: "center" }}>
      <img src={images[index]} alt="cleaning images" width="60%" height="70%" />
      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;

import { useState } from 'react';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Declare a function `handleLeftClick` to move to the previous image
  const handleLeftClick = () => {
    // If the current index is already at the first image, go back to the last image
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Declare a function `handleRightClick` to move to the next image
  const handleRightClick = () => {
    // If the current index is already at the last image, go back to the first image
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      {/* Display the current image */}
      <img src={images[currentIndex]} alt="Carousel" />

      {/* Render the left and right buttons with the appropriate click handlers */}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
}

import { useState } from 'react';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const handleLeftClick = () => {
   
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  
  const handleRightClick = () => {
    
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
     <img src={images[currentIndex]} alt="Carousel" />

      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
}

import { useState } from 'react';
import '../css/likebutton.css'

export default function LikeButton() {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const [numLikes, setNumLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    setNumLikes(numLikes + 1);
    setColorIndex((colorIndex + 1) % colors.length);    
  };

  return (
    <div className="likebutton">
      <button
        style={{ backgroundColor: colors[colorIndex] }}
        onClick={handleClick}
      >
        {numLikes} Likes
      </button>
    </div>
  );
}

import { useState } from 'react';
import '../css/clickablepicture.css'

export default function ClickablePicture(props) {
    const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div style={{ position: 'relative' }}>
      <img src={props.img} alt="maxence" onClick={handleClick} />
      {isClicked && (
        <img className='glasses' alt="glasses"
          src={props.imgClicked}
          onClick={handleClick}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      )}
    </div>
  );
}
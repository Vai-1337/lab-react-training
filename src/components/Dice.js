import { useState } from 'react';
import '../css/dice.css'

export default function Dice() {
  const [diceNumber, setDiceNumber] = useState(1);

  const handleClick = () => {
    setDiceNumber(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div>
      <img className="dice"
        src={`../assets/images/dice-${diceNumber}.png`}
        alt="Dice"
        onClick={handleClick}
      />
    </div>
  );
}

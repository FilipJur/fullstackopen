/* eslint-disable react/prop-types */
import { useState } from "react";

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const handleRightClicks = () => {
    const newClicks = {
      right: clicks.right + 1,
      left: clicks.left,
    };
    setClicks(newClicks);
  };
  const handleLeftClicks = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right,
    };
    setClicks(newClicks);
  };
  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClicks}>Left</button>
      <button onClick={handleRightClicks}>Right</button>
      {clicks.right}
    </div>
  );
};
export default App;


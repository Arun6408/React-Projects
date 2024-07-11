import React, { useState } from "react";
import Start from "./components/StartGame/Start";
import "./App.css";
import GamePlay from "./components/GamePlay/GamePlay";
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGame = () => {
    setIsGameStarted((prev)=>!prev);
  };
  return <>{isGameStarted ? <GamePlay /> : <Start toggle={toggleGame}/>}</>;
}

export default App;

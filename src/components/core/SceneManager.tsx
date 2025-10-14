import { GameScene } from "../scenes/GameScene";
import { TitleScene } from "../scenes/TitleScene";
import { EndScene } from "../scenes/EndScene";
import { useState } from "react";

export const SceneManager = () => {
  const [scene, setScene] = useState<"title" | "playing" | "end">("title");

  const handleStartGame = () => setScene("playing");
  const handleEndGame = () => setScene("end");
  const handleBackTotitle = () => setScene("title");

  switch (scene) {
    case "title":
      return <TitleScene onStart={handleStartGame} />;
    case "playing":
      return <GameScene onEndGame={handleEndGame} />;
    case "end":
      return <EndScene onBackTotitle={handleBackTotitle} />;
    default:
      return <TitleScene onStart={handleStartGame} />;
  }
};

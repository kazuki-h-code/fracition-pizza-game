import { TextStyle } from "pixi.js";
import { Button } from "../ui/Button";
import { VIRTUAL_WIDTH, VIRTUAL_HEIGHT } from "../core/GameContainer";

export const EndScene = ({ onBackTotitle }: { onBackTotitle: () => void }) => {
  return (
    <>
      <pixiText
        text="がんばったね！"
        anchor={0.5}
        x={VIRTUAL_WIDTH / 2}
        y={VIRTUAL_HEIGHT / 2 - 50}
        style={new TextStyle({ fontSize: 60, fill: "white" })}
      />
      <Button
        text="タイトルへ"
        x={VIRTUAL_WIDTH / 2}
        y={VIRTUAL_HEIGHT / 2 + 50}
        onClick={onBackTotitle}
      />
    </>
  );
};

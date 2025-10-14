import { TextStyle } from "pixi.js";
import { Button } from "../ui/Button";
import { VIRTUAL_WIDTH, VIRTUAL_HEIGHT } from "../core/GameContainer";

export const TitleScene = ({ onStart }: { onStart: () => void }) => {
  return (
    <>
      <pixiText
        text="分数ピザゲーム"
        anchor={0.5}
        x={VIRTUAL_WIDTH / 2}
        y={VIRTUAL_HEIGHT / 2 - 50}
        style={new TextStyle({ fontSize: 60, fill: "white" })}
      />
      <Button
        text="START"
        x={VIRTUAL_WIDTH / 2}
        y={VIRTUAL_HEIGHT / 2 + 50}
        onClick={onStart}
      />
    </>
  );
};

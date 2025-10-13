import { Graphics, TextStyle } from "pixi.js";
import { useCallback } from "react";
import { Button } from "./Button";

type FeedbackDisplayProps = {
  status: "correct" | "wrong";
  screenWidth: number;
  screenHeight: number;
  onNextQuestion: () => void;
};

export const FeedbackDisplay = ({
  status,
  screenWidth,
  screenHeight,
  onNextQuestion,
}: FeedbackDisplayProps) => {
  const drawShape = useCallback(
    (g: Graphics) => {
      g.clear();
      if (status === "correct") {
        g.circle(screenWidth / 2, screenHeight / 2, 100).stroke({
          color: 0x33ff33,
          width: 15,
          alpha: 0.8,
        });
      } else {
        g.moveTo(-70, -70)
          .lineTo(70, 70)
          .moveTo(70, -70)
          .lineTo(-70, 70)
          .stroke({ color: 0xff3333, width: 15, alpha: 0.8 });
      }
    },
    [screenHeight, screenWidth, status],
  );

  const drawOverlay = useCallback(
    (g: Graphics) => {
      g.clear();
      g.filletRect(0, 0, screenWidth, screenHeight, 0).fill({
        color: 0x000000,
        alpha: 0.5,
      });
    },
    [screenWidth, screenHeight],
  );

  const feedbackText = status === "correct" ? "せいかい！" : "ざんねん！";
  const textColor = status === "correct" ? "#33FF33" : "#FF3333";

  return (
    <pixiContainer>
      <pixiGraphics draw={drawOverlay} interactive={true} />
      <pixiGraphics draw={drawShape} />
      <pixiText
        text={feedbackText}
        y={140}
        anchor={0.5}
        style={
          new TextStyle({
            fontSize: 40,
            fill: textColor,
            fontWeight: "bold",
            stroke: "white",
          })
        }
      />
      <Button text="次の問題へ" x={0} y={220} onClick={onNextQuestion} />
    </pixiContainer>
  );
};

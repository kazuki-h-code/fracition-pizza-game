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
        g.circle(0, 0, 100).stroke({
          color: 0x4caf50,
          width: 15,
        });
      } else {
        g.moveTo(-70, -70)
          .lineTo(70, 70)
          .moveTo(70, -70)
          .lineTo(-70, 70)
          .stroke({ color: 0xf44336, width: 15 });
      }
    },
    [status],
  );

  const drawOverlay = useCallback(
    (g: Graphics) => {
      g.clear();
      g.filletRect(0, 200, screenWidth, screenHeight, 0).fill({
        alpha: 0,
      });
    },
    [screenWidth, screenHeight],
  );

  const feedbackText = status === "correct" ? "せいかい！" : "ざんねん！";
  const textColor = status === "correct" ? "0x4caf50" : "0xf44336";

  return (
    <>
      <pixiGraphics draw={drawOverlay} interactive={true} />
      <pixiContainer x={screenWidth / 2} y={screenHeight / 2}>
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
    </>
  );
};

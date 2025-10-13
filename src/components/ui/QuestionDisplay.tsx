import { Graphics, TextStyle } from "pixi.js";
import { useCallback } from "react";

type QuestionDisplayProps = {
  x: number;
  y: number;
  numerator: number;
  denomirator: number;
};

export const QuestionDisplay = ({
  x,
  y,
  numerator,
  denomirator,
}: QuestionDisplayProps) => {
  const lineStyle = { width: 4, color: 0xffffff };
  const textStyle = new TextStyle({ fontSize: 40, fill: "white" });

  const drawLine = useCallback((g: Graphics) => {
    g.clear();
    g.moveTo(-40, 0).lineTo(40, 0).stroke(lineStyle);
  }, []);

  return (
    <pixiContainer x={x} y={y}>
      <pixiText
        text="お題："
        anchor={{ x: 0, y: 0.5 }}
        x={-120}
        style={new TextStyle({ fontSize: 24, fill: "white" })}
      />
      <pixiText
        text={numerator.toString()}
        anchor={0.5}
        y={-35}
        style={textStyle}
      />
      <pixiGraphics draw={drawLine} />
      <pixiText
        text={denomirator.toString()}
        anchor={0.5}
        y={35}
        style={textStyle}
      />
    </pixiContainer>
  );
};

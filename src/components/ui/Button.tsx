import { Graphics, TextStyle } from "pixi.js";
import { useState, useCallback } from "react";

type ButtonProps = {
  text: string;
  x: number;
  y: number;
  onClick: () => void;
};

export const Button = ({ text, x, y, onClick }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const buttonWidth = 180;
  const buttonHeight = 50;

  const draw = useCallback(
    (g: Graphics) => {
      const color = isPressed ? 0x1565c0 : isHovered ? 0x42a5f5 : 0x1976d2;
      g.clear();
      g.filletRect(
        -buttonWidth / 2,
        -buttonHeight / 2,
        buttonWidth,
        buttonHeight,
        10,
      )
        .stroke({
          color: color,
          width: 1,
        })
        .fill(color);
    },
    [isHovered, isPressed],
  );

  const scale = isPressed ? 0.95 : 1;

  return (
    <pixiContainer
      x={x}
      y={y}
      scale={scale}
      interactive={true}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onPointerDown={() => setIsPressed(true)}
      onPointerUp={() => {
        setIsPressed(false);
        onClick();
      }}
      onPointerUpOutside={() => setIsHovered(false)}
    >
      <pixiGraphics draw={draw} />
      <pixiText
        text={text}
        anchor={0.5}
        x={0}
        y={0}
        style={
          new TextStyle({
            fill: "white",
            fontSize: 24,
          })
        }
      />
    </pixiContainer>
  );
};

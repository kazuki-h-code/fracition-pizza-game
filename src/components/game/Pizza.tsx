import { extend } from "@pixi/react";
import { Container } from "pixi.js";
import { PizzaSlice } from "./PizzaSlice";

type PizzaProps = {
  denominator: number;
  radius: number;
  x: number;
  y: number;
};

extend({ Container });

export const Pizza = ({ denominator, radius, x, y }: PizzaProps) => {
  const sliceComponents = [];

  for (let i = 0; i < denominator; i++) {
    sliceComponents.push(
      <PizzaSlice
        key={i}
        index={i}
        totalSlices={denominator}
        radius={radius}
      />,
    );
  }

  return (
    <pixiContainer x={x} y={y}>
      {sliceComponents}
    </pixiContainer>
  );
};

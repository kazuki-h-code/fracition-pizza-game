import { extend } from "@pixi/react";
import { Graphics } from "pixi.js";
import { useCallback, useState } from "react";

type PizzaSliceProps = {
  index: number;
  totalSlices: number;
  radius: number;
  isSelected: boolean;
  onSliceClick: (index: number) => void;
};

extend({ Graphics });

export const PizzaSlice = ({
  index,
  totalSlices,
  radius,
  isSelected,
  onSliceClick,
}: PizzaSliceProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const drawPizza = useCallback(
    (g: Graphics) => {
      let sliceColor = 0xffd700;
      if (isSelected) {
        sliceColor = 0x90ee90;
      } else if (isHovered) {
        sliceColor = 0xfffbc9;
      }

      const sliceAngle = (2 * Math.PI) / totalSlices;
      const startAngle = index * sliceAngle;
      const endAngle = startAngle + sliceAngle;
      g.clear();
      g.moveTo(0, 0)
        .arc(0, 0, radius, startAngle, endAngle)
        .lineTo(0, 0)
        .stroke({ color: 0x000000, width: 1 })
        .fill({ color: sliceColor });
    },
    [index, totalSlices, radius, isHovered, isSelected],
  );

  return (
    <pixiGraphics
      draw={drawPizza}
      interactive={true}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      onClick={() => onSliceClick(index)}
    />
  );
};

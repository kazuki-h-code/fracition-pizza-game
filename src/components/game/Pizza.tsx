import { PizzaSlice } from "./PizzaSlice";

type PizzaProps = {
  selectedSlices: boolean[];
  onSliceClick: (index: number) => void;
  radius: number;
  x: number;
  y: number;
};

export const Pizza = ({
  selectedSlices,
  onSliceClick,
  radius,
  x,
  y,
}: PizzaProps) => {
  return (
    <pixiContainer x={x} y={y}>
      {selectedSlices.map((isSelected, i) => (
        <PizzaSlice
          key={i}
          index={i}
          totalSlices={selectedSlices.length}
          radius={radius}
          isSelected={isSelected}
          onSliceClick={onSliceClick}
        />
      ))}
    </pixiContainer>
  );
};

import { useApplication } from "@pixi/react";
import { Pizza } from "../components/game/Pizza";
import { useState } from "react";

export const GameScene = () => {
  const [selectedSlices, setSelectedSlices] = useState<number[]>([])
  const { app } = useApplication();

  const handleSliceSelect = (index: number) => {
    const newSelectedSlices = [...selectedSlices];
    newSelectedSlices[index] = !newSelectedSlices[index];
    setSelectedSlices(newSelectedSlices);
  }

  return (
    <>
      <Pizza
        denominator={8}
        radius={150}
        x={app.screen.width / 2}
        y={app.screen.height / 2}
      />
    </>
  );
};

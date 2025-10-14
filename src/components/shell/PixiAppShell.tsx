import { Application, extend } from "@pixi/react";
import { Container, Graphics, Text } from "pixi.js";
import React from "react";

export const VIRTUAL_WIDTH = 800;
export const VIRTUAL_HEIGHT = 600;

extend({ Container, Graphics, Text });

type PixiAppShellProps = {
  children: React.ReactNode;
  width: number;
  height: number;
};

export const PixiAppShell = ({
  children,
  width,
  height,
}: PixiAppShellProps) => {
  const scale = Math.min(width / VIRTUAL_WIDTH, height / VIRTUAL_HEIGHT);
  const x = (width - VIRTUAL_WIDTH * scale) / 2;
  const y = (height - VIRTUAL_HEIGHT * scale) / 2;

  return (
    <>
      <Application
        background={"#1099bb"}
        antialias={true}
        width={width}
        height={height}
      >
        <pixiContainer x={x} y={y} scale={scale}>
          {children}
        </pixiContainer>
      </Application>
    </>
  );
};

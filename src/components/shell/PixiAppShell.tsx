import { Application, extend } from "@pixi/react";
import { Container, Graphics } from "pixi.js";
import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

export const VIRTUAL_WIDTH = 800;
export const VIRTUAL_HEIGHT = 600;

extend({ Container, Graphics });

type PixiAppShellProps = {
  children: React.ReactNode;
};

export const PixiAppShell = ({ children }: PixiAppShellProps) => {
  const { width: realWidth, height: realHeight } = useWindowSize();

  const scale = Math.min(
    realWidth / VIRTUAL_WIDTH,
    realHeight / VIRTUAL_HEIGHT,
  );
  const x = (realWidth - VIRTUAL_WIDTH * scale) / 2;
  const y = (realHeight - VIRTUAL_HEIGHT * scale) / 2;

  return (
    <Application background={"#1099bb"} resizeTo={window} antialias={true}>
      <pixiContainer x={x} y={y} scale={scale}>
        {children}
      </pixiContainer>
    </Application>
  );
};

import { Application, extend } from "@pixi/react";
import { Container, Sprite } from "pixi.js";
import React from "react";

extend({ Container, Sprite });

type PixiAppShellProps = {
  children: React.ReactNode;
};

export const PixiAppShell = ({ children }: PixiAppShellProps) => {
  return (
    <Application background={"#1099bb"} resizeTo={window}>
      {children}
    </Application>
  );
};

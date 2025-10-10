import { Application, extend } from "@pixi/react";
import { Container, Graphics } from "pixi.js";
import React from "react";

extend({ Container, Graphics });

type PixiAppShellProps = {
  children: React.ReactNode;
};

export const PixiAppShell = ({ children }: PixiAppShellProps) => {
  return (
    <Application background={"#1099bb"} resizeTo={window} antialias={true}>
      {children}
    </Application>
  );
};

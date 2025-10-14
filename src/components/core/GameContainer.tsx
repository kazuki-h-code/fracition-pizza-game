import { SceneManager } from "./SceneManager";
import { Container, Graphics, Text } from "pixi.js";
import { Application, extend, useApplication } from "@pixi/react";
import { useEffect, useState } from "react";

extend({ Container, Graphics, Text });

export const VIRTUAL_WIDTH = 800;
export const VIRTUAL_HEIGHT = 600;

const ResizeContainer = ({ children }: { children: React.ReactNode }) => {
  const { app } = useApplication();
  const [screenSize, setScreenSize] = useState({
    width: app.screen.width,
    height: app.screen.height,
  });
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: app.screen.width, height: app.screen.height });
    };
    app.renderer.on("resize", handleResize);
    return () => {
      app.renderer.off("resize", handleResize);
    };
  }, [app]);

  const scale = Math.min(
    screenSize.width / VIRTUAL_WIDTH,
    screenSize.height / VIRTUAL_HEIGHT,
  );
  const x = (screenSize.width - VIRTUAL_WIDTH * scale) / 2;
  const y = (screenSize.height - VIRTUAL_HEIGHT * scale) / 2;

  return (
    <pixiContainer x={x} y={y} scale={scale}>
      {children}
    </pixiContainer>
  );
};

export const GameContainer = () => {
  return (
    <>
      <Application antialias={true} background={"#1099bb"} resizeTo={window}>
        <ResizeContainer>
          <SceneManager />
        </ResizeContainer>
      </Application>
    </>
  );
};

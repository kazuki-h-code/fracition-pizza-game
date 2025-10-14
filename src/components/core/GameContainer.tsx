import { SceneManager } from "./SceneManager";
import { Container, Graphics, Text } from "pixi.js";
import { Application, useApplication, extend } from "@pixi/react";
import { useRef } from "react";

extend({ Container, Graphics, Text });

const VIRTUAL_WIDTH = 800;
const VIRTUAL_HEIGHT = 600;

const ResponsiveContent = () => {
  const { app } = useApplication();

  const scale = Math.min(
    app.screen.width / VIRTUAL_WIDTH,
    app.screen.height / VIRTUAL_HEIGHT,
  );
  const x = (app.screen.width - VIRTUAL_WIDTH * scale) / 2;
  const y = (app.screen.height - VIRTUAL_HEIGHT * scale) / 2;

  return (
    <pixiContainer x={x} y={y} scale={scale}>
      <SceneManager />
    </pixiContainer>
  );
};

export const GameContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const { ref, entry } = useResizeObserver<HTMLDivElement>();
  // const realWidth = entry?.contentRect.width || VIRTUAL_WIDTH;
  // const realHeight = entry?.contentRect.height || VIRTUAL_HEIGHT;

  return (
    <>
      <div
        style={{
          width: "80vw",
          height: "80vh",
          margin: "auto",
          marginTop: "5vh",
          border: "2px solid red",
        }}
      >
        <div
          ref={containerRef}
          style={{ position: "relative", width: "100%", height: "100%" }}
        >
          <Application
            antialias={true}
            background={"#1099bb"}
            resizeTo={containerRef.current || window}
          >
            <ResponsiveContent />
          </Application>
        </div>
      </div>
    </>
  );
};

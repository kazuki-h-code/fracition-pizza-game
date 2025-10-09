import { SceneManager } from "./components/core/SceneManager";
import { PixiAppShell } from "./components/shell/PixiAppShell";

export default function App() {
  return (
    // We'll wrap our components with an <Application> component to provide
    // the Pixi.js Application context
    <PixiAppShell>
      <SceneManager />
    </PixiAppShell>
  );
}

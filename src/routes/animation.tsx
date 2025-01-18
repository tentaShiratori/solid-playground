import { createTween } from "@solid-primitives/tween";
import { createSignal } from "solid-js";
export default function Home() {
  const [height, setHeight] = createSignal(0);
  const tweenedValue = createTween(height, { duration: 500 });
  return (
    <main>
      <button type="button" onClick={() => setHeight(height() + 100)}>
        Increase height
      </button>
      <div style={{ background: "red", height: `${tweenedValue()}px` }} />
    </main>
  );
}

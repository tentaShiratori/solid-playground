import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <>
      <button
        class="increment"
        onClick={() => setCount(count() + 1)}
        type="button"
      >
        Clicks: {count()}
      </button>
      {/* <MyComp count={count()} /> */}
    </>
  );
}

// function MyComp(props) {
//   return () => {
// 	console.log("MyComp")
//     if (props.count > 5) {
//       return <div>Maximum Tries</div>;
//     }

//     return <div>Attempt {props.count}</div>;
//   };
// }

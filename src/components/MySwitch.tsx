import { createSignal, Match, Switch } from "solid-js";

export const MySwitch = () => {
  const [state] = createSignal<
    "initial" | "inProgress" | "almostComplete" | "complete"
  >("initial");
  const isInitial = () => {
    const s = state();
    return s === "initial" ? s : null;
  };
  return (
    <Switch>
      <Match when={isInitial()}>{(s) => <div>{s()}</div>}</Match>
    </Switch>
  );
};

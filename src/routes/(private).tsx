import type { RouteSectionProps } from "@solidjs/router";

export default function PrivateLayout(props: RouteSectionProps) {
  return (
    <div>
      <div>private</div>
      {props.children}
    </div>
  );
}

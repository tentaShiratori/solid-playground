import type { RouteSectionProps } from "@solidjs/router";
import { protectedRoute } from "~/components/protectedRoute";

export default protectedRoute<RouteSectionProps>(function PrivateLayout(props) {
	return (
		<div>
			<div>private</div>
			{props.children}
		</div>
	);
});

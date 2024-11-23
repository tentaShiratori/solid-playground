// @refresh reload
import { StartClient, mount } from "@solidjs/start/client";

async function enableMocking() {
	if (process.env.NODE_ENV !== "development") {
		return;
	}

	const { worker } = await import("./mocks/browser");

	// `worker.start()` returns a Promise that resolves
	// once the Service Worker is up and ready to intercept requests.
	return worker.start();
}

enableMocking().then(() =>
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	mount(() => <StartClient />, document.getElementById("app")!),
);
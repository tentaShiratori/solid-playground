import "@testing-library/jest-dom";
import { commitValueAfterInput } from "@testing-library/user-event/dist/cjs/document/trackValue.js";
import { server } from "./msw";

beforeAll(() => {
	server.listen();
});
afterEach(async () => {
	server.resetHandlers();
});
afterAll(() => {
	server.close();
});

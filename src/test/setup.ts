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

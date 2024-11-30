import { SolidAuth } from "@auth/solid-start";
import { authOption } from "~/lib/auth/option";

const handlers = SolidAuth(authOption);
export const GET = handlers.GET;
export const POST = handlers.POST;

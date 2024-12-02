import { getSession as baseGetSession } from "@auth/solid-start";
import { getRequestEvent } from "solid-js/web";
import { authOption } from "./option";

export const getSession = async () => {
  "use server";
  const request = getRequestEvent()?.request;
  if (!request) {
    return null;
  }
  return baseGetSession(request, authOption);
};

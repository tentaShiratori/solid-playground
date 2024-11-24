import "server-only";
import crypto from "node:crypto";
import { getSession as baseGetSession } from "@auth/solid-start";
import { provider } from "./provider";

// authjs内部でcryptoを使っているため、globalに代入する
// dev server起動中は下記を消しても動くが、dev serverを起動直後は下記がないとエラーが出るので消すな
global.crypto = crypto as never;

export const getSession = async (request: Request) => {
	return baseGetSession(request, {
		basePath: "/api/auth",
		providers: [provider],
	});
};

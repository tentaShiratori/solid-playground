import crypto from "node:crypto";
import { SolidAuth } from "@auth/solid-start";
import { provider } from "~/lib/auth/provider";

if (process.env.NODE_ENV === "development") {
	// authjs内部でcryptoを使っているため、globalに代入する
	global.crypto = crypto as never;
}

declare module "@auth/core/jwt" {
	interface JWT {
		accessToken: string;
	}
}
declare module "@auth/core/types" {
	interface Session {
		accessToken: string;
	}
}

// MEMO: 下記のように書くとエラーが出るのでGET,POSTを一旦リネームする
// const {GET,POST} = SolidAuth({});
// export { GET, POST };
const { GET: getHandler, POST: posthandler } = SolidAuth({
	basePath: "/api/auth",
	prefix: "/api/auth",
	providers: [provider],
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account?.access_token ?? "";
			}
			return token;
		},
		async session({ session, token }) {
			session.accessToken = token.accessToken;
			return session;
		},
	},
});

export const GET = getHandler;
export const POST = posthandler;

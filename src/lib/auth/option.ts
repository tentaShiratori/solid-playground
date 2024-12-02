import Auth0 from "@auth/core/providers/auth0";
import type { SolidAuthConfig } from "@auth/solid-start";

import crypto from "node:crypto";

if (process.env.NODE_ENV === "development") {
  // authjs内部でcryptoを使っているため、globalに代入する
  // dev server起動中は下記を消しても動くが、dev serverを起動直後は下記がないとエラーが出るので消すな、とにかく消すな
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

const auth0 = Auth0({
  issuer: process.env.AUTH0_ISSUER,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
});

export const authOption: SolidAuthConfig = {
  basePath: "/api/auth",
  prefix: "/api/auth",
  providers: [auth0],
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
};

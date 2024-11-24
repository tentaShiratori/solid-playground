import Auth0 from "@auth/core/providers/auth0";

export const provider = Auth0({
	issuer: process.env.AUTH0_ISSUER,
	clientId: process.env.AUTH0_CLIENT_ID,
	clientSecret: process.env.AUTH0_CLIENT_SECRET,
});

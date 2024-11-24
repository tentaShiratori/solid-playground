import { db } from "~/server/db/client";
import type { Resolvers } from "./resolvers-types";

export const resolvers: Resolvers = {
	Query: {
		posts: async (_parent, _args, context) => {
			return db.query.postsTable.findMany();
		},
	},
	Post: {
		author: async (parent, _args, context) => {
			return { firstName: "John", id: 1, lastName: "Doe" };
		},
	},
};

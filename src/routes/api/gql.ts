import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchema } from "@graphql-tools/load";
import type { APIEvent } from "@solidjs/start/server";
import { graphql } from "graphql";
import { resolvers } from "~/server/gql/resolvers";

const schema = await loadSchema("src/server/gql/schema/*.graphql", {
	loaders: [new GraphQLFileLoader()],
});

const handler = async (event: APIEvent) => {
	const body = await new Response(event.request.body).json();
	const result = await graphql({
		rootValue: resolvers.Query,
		fieldResolver: (source, args, context, info) => {
			const typeName = info.parentType.name;
			const fieldName = info.fieldName;

			// @ts-ignore
			if (resolvers[typeName]?.[fieldName]) {
				// @ts-ignore
				return resolvers[typeName][fieldName](source, args, context, info);
			}
			return source[fieldName];
		},
		schema: schema,
		source: body.query,
	});
	return result;
};

export const GET = handler;

export const POST = handler;

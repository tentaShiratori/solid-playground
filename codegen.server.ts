import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "./src/server/gql/schema/*.graphql",
	generates: {
		"./src/server/gql/resolvers/resolvers-types.ts": {
			plugins: [
				{
					add: {
						content: "/* eslint-disable */",
					},
				},
				"typescript",
				"typescript-resolvers",
			],
		},
	},
};
export default config;

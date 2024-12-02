import { Title } from "@solidjs/meta";
import { createQuery } from "@urql/solid";
import { Index, Show } from "solid-js";
import { graphql } from "~/gql";

const PostQuery = graphql(`
	query PostQuery {
		posts {
			id
			title
			author {
				firstName
				lastName
			}
		}
	}`);
export default function Page() {
  const [result] = createQuery({ query: PostQuery, variables: {} });
  return (
    <main>
      <Title>GQL/URQL</Title>
      <h1>GQL/URQL</h1>
      <Show when={result.data}>
        {(d) => {
          return (
            <div>
              <Index
                each={d().posts?.filter((p) => p != null)}
                fallback={<div>Loading...</div>}
              >
                {(post) => (
                  <div>
                    <h2>{post().title}</h2>
                    <p>
                      {post().author?.firstName} {post().author?.lastName}
                    </p>
                  </div>
                )}
              </Index>
            </div>
          );
        }}
      </Show>
    </main>
  );
}

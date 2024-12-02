import { useParams, useSearchParams } from "@solidjs/router";

export default function Page() {
  const params = useParams();
  const [search, setSearch] = useSearchParams<{ query: string }>();

  return (
    <div>
      <div>param: {params.id}</div>
      <div>search: {search.query}</div>
      <button
        type="button"
        onClick={() => {
          setSearch({ query: search.query === "foo" ? "bar" : "foo" });
        }}
      >
        Change Search
      </button>
    </div>
  );
}

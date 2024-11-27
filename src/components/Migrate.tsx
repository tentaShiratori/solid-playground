import { Title } from "@solidjs/meta";
import { type Resource, createContext, useContext } from "solid-js";

const UserContext = createContext<{
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}>();
export default function Migrate(props: {
	data: Resource<{
		userId: number;
		id: number;
		title: string;
		completed: boolean;
	}>;
}) {
	return (
		<UserContext.Provider value={props.data()}>
			<UserDetail />
		</UserContext.Provider>
	);
}

const UserDetail = () => {
	const user = useContext(UserContext);
	return (
		<div>
			<h2>{user?.userId}</h2>
			<h2>{user?.title}</h2>
			<p>{user?.completed ? "Completed" : "Not completed"}</p>
		</div>
	);
};

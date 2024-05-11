import Image from "next/image";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default function Home() {
	return (
		<main>
			<h1>nexjs todo</h1>
			<div>
				<div>
					<AddTask />
					<TodoList />
				</div>
			</div>
		</main>
	);
}

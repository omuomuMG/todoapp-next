import { Task } from "./types";

export const getAllTodos = async (): Promise<Task[]> => {
	const res = await fetch("http://localhost:3000/tasks", { cache: "no-store" }); //no-storeでSSR
	const todos = res.json();
	return todos;
};

export const addTodos = async (todo: Task): Promise<Task[]> => {
	const res = await fetch("http://localhost:3000/tasks", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(todo),
	});
	const newTodo = res.json();
	return newTodo;
};

export const edit = async (id: string, newText: string): Promise<Task[]> => {
	const res = await fetch(`http://localhost:3000/tasks/${id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ text: newText }),
	});
	const updatedTodo = res.json();
	return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<Task[]> => {
	const res = await fetch(`http://localhost:3000/tasks/${id}`, {
		method: "DELETE",
		headers: { "Content-Type": "application/json" },
	});
	const updatedTodo = res.json();
	return updatedTodo;
};

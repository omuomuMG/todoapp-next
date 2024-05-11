"use client";
import { addTodos } from "@/api";
import React, { ChangeEvent, FormEvent, useState } from "react";

function AddTask() {
	const [taskTitle, setTaskTitle] = useState("");
	const [id, SetId] = useState<number>(5);
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		await addTodos({ id: id.toString(), text: taskTitle });
		setTaskTitle("");
		SetId(id + 1);
	};
	return (
		<form className="mb-4 space-y-3" onSubmit={handleSubmit}>
			<input
				type="text"
				className="w-full border px-4 py-2 rounded-lg focus:outline-none"
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setTaskTitle(e.target.value)
				}
			></input>
			<button className="w-full px-4 py-2 text-white bg-bule-500 rounded transform :hover bg-blue-500 hover:scale-95 duration-200">
				Add Task
			</button>
		</form>
	);
}

export default AddTask;

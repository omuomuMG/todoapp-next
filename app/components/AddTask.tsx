"use client";
import { addTodos } from "@/api";
import { randomUUID } from "crypto";
import React, { ChangeEvent, FormEvent, useState } from "react";

function AddTask() {
	const [taskTitle, setTaskTitle] = useState("");
	const [id, setId] = useState<string>(randomUUID);
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		if (taskTitle != "") {
			await addTodos({ id: id, text: taskTitle });
			setId(randomUUID.toString);
			setTaskTitle("");
		}
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

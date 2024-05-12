"use client";
import { edit } from "@/api";
import { Task } from "@/types";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

interface TodoProps {
	todo: Task;
}

const Todo = ({ todo }: TodoProps) => {
	const [isEditting, setIsEdditing] = useState<boolean>(false);
	const [newText, setNewText] = useState<string>("");
	const ref = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (isEditting) {
			ref.current?.focus();
		}
	}, [isEditting]);

	const handleEdit = async () => {
		setIsEdditing(true);
	};
	const handleDecide = async (id: string) => {
		setIsEdditing(false);
		edit(id, newText);
	};
	return (
		<li
			key={todo.id}
			className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
		>
			{isEditting ? (
				<input
					ref={ref}
					type="text"
					className="mr-2 py-1 px-2 rounded border-gray-700 border"
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						setNewText(e.target.value);
					}}
				></input>
			) : (
				<span>{todo.text}</span>
			)}
			<div>
				{isEditting ? (
					<button
						className="text-green100 mr-3"
						onClick={() => handleDecide(todo.id)}
					>
						decide
					</button>
				) : (
					<button className="text-green-500 mr-3" onClick={handleEdit}>
						edit
					</button>
				)}
				<button className="text-red-500">delete</button>
			</div>
		</li>
	);
};

export default Todo;

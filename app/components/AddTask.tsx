import React from "react";

function AddTask() {
	return (
		<form className="mb-4 space-y-3">
			<input
				type="text"
				className="w-full border px-4 py-2 rounded-lg focus:outline-none"
			></input>
			<button className="w-full px-4 py-2 text-white bg-bule-500 rounded transform :hover bg-blue-500 hover:scale-95 duration-200">
				Add Task
			</button>
		</form>
	);
}

export default AddTask;

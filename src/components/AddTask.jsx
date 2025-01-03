import { useState } from "react";

function AddTask({ addTask }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    isCompleted: false,
  });

  function onChange(event) {
    setTask({ ...task, [event.target.name]: event.target.value });
  }

  return (
    <div className="flex-col justify-center gap-2 space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <input
        type="text"
        name="title"
        placeholder="Título da tarefa"
        value={task.title}
        onChange={onChange}
        className="flex-1 w-full px-3 py-2 rounded-md text-sm text-gray-700 bg-white border border-gray-300 focus:outline-none focus:ring-blue-500"
      />
      <input
        type="text"
        name="description"
        placeholder="Descrição da tarefa"
        value={task.description}
        onChange={onChange}
        className="flex-1 w-full px-3 py-2 rounded-md text-sm text-gray-700 bg-white border border-gray-300 focus:outline-none focus:ring-blue-500"
      />
      <button
        onClick={() => addTask(task)}
        className="w-full bg-slate-500 text-white p-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;

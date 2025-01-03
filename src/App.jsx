//import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";

function App() {
  //let [message, setMessage] = useState("Olaaa");

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("../fakedata.json")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching the JSON file:", error));
  }, []);

  function onTaskClick(taskId) {
    var newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks);
  }

  function onTaskDelete(taskId) {
    var newTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(newTasks);
  }

  function addTask(task) {
    const lastId = tasks.length - 1;
    task.id = lastId + 1;
    var newTasks = [...tasks, task];
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask addTask={addTask} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;

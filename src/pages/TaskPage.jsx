import { useParams } from "react-router";
import { useEffect, useState } from "react";

function TaskPage() {
  const { id } = useParams();
  const [task, setTask] = useState({
    id: id,
    title: "",
    description: "",
    isCompleted: false,
  });

  useEffect(() => {
    fetch("../fakedata.json")
      .then((response) => response.json())
      .then((data) => {
        const taskData = data.find((t) => t.id === parseInt(id));
        console.log(taskData);
        if (taskData) {
          setTask(taskData);
        } else {
          setTask(null);
        }
      })
      .catch((error) => console.error("Error fetching the JSON file:", error));
  }, []);

  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      {task === null ? (
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Tarefa não encontrada
        </h1>
      ) : (
        <>
          <div className="w-[500px] space-y-4 justify-self-center">
            <h1 className="text-3xl text-slate-100 font-bold text-center">
              Detalhes da tarefa
            </h1>

            <div className="bg-slate-400 p-4 rounded-md">
              <h2 className="text-xl text-white font-bold">
                Task ID #{id} {task.title}
              </h2>
              <p className="text-white">{task.description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskPage;

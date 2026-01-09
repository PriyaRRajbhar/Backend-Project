import { useEffect, useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Unauthorized");
      }

      const data = await res.json();

      if (Array.isArray(data)) {
        setTasks(data);
      } else {
        setTasks([]);
      }
    } catch (error) {
      console.error(error);
      alert("Please login again");
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  };

  fetchTasks();
}, []);


  return (
    <div>
      <h2>My Tasks</h2>

      <input
        placeholder="New task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;

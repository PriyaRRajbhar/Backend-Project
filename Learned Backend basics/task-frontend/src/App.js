import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const token = "YOUR_JWT_TOKEN_HERE"; // Replace with actual token retrieval logic
  
useEffect(() => {
  const token = localStorage.getItem("token");

  fetch("http://localhost:3000/api/tasks", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(data => setTasks(data));
}, []);

  return (
    <div>
      <h2>My Tasks</h2>
      {tasks.map(task => (
        <p key={task._id}>{task.title}</p>
      ))}
    </div>
  );
}



export default App;

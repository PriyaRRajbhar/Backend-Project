const addTask = async () => {
  const token = localStorage.getItem("token");

  await fetch("http://localhost:3000/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ title: "New Task" })
  });
};

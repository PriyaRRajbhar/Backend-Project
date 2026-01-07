import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      // ❌ LOGIN FAILED
      if (!res.ok) {
        alert(data.message || "Invalid credentials");
        return;
      }

      // ✅ LOGIN SUCCESS
      localStorage.setItem("token", data.token);
      alert("Login successful");

      // redirect to tasks page
      window.location.href = "/tasks";

    } catch (error) {
      alert("Server error");
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-lg w-80"
    >
      <h2 className="text-2xl font-bold text-center mb-4">
        Login
      </h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-3 border rounded"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border rounded"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  </div>
);}


export default Login;

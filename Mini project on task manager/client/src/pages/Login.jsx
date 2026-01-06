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
    <div>
      <h2 className="bg-red">Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

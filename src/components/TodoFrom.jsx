import { useState } from "react";

function TodoForm({ setTodos }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) return;

    try {
      const response = await fetch("http://127.0.0.1:8000/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });

      const newTodo = await response.json();

      // Tambahkan todo baru ke list
      setTodos((prev) => [...prev, newTodo]);

      setTitle("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Masukkan tugas..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "8px", width: "70%" }}
      />
      <button type="submit" style={{ padding: "8px 12px", marginLeft: "10px" }}>
        Tambah
      </button>
    </form>
  );
}

export default TodoForm;

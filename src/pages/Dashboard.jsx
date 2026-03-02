import { useEffect, useState } from "react";
import TodoForm from "../components/TodoFrom.jsx";
import TodoList from "../components/TodoList.jsx";

function Dashboard() {
  const [todos, setTodos] = useState([]);

  // Ambil data dari backend
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  // update data
  const updateTodo = async (id, updatedData) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      const updatedTodo = await response.json();

      // Update state tanpa reload
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo)),
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // delete data
  const deleteTodo = async (id) => {
    try {
      await fetch(`http://127.0.0.1:8000/api/todos/${id}`, {
        method: "DELETE",
      });

      // Hapus dari state tanpa reload
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto" }}>
      <h1>📝 Todo List API</h1>

      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Dashboard;

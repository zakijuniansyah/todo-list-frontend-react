function TodoList({ todos, updateTodo, deleteTodo }) {
  const handleToggle = (todo) => {
    updateTodo(todo.id, {
      ...todo,
      is_completed: !todo.is_completed,
    });
  };

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            padding: "14px 18px",
            marginBottom: "14px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.06)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            transition: "0.3s",
            border: "1px solid #eee",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#333",
              textDecoration: todo.is_completed ? "line-through" : "none",
              opacity: todo.is_completed ? 0.6 : 1,
            }}
          >
            {todo.title}
          </span>

          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => handleToggle(todo)}
              style={{
                padding: "6px 12px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                backgroundColor: todo.is_completed ? "#facc15" : "#22c55e",
                color: "white",
                fontWeight: "500",
                transition: "0.2s",
              }}
            >
              {todo.is_completed ? "Belum" : "Selesai"}
            </button>

            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                padding: "6px 12px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                backgroundColor: "#ef4444",
                color: "white",
                fontWeight: "500",
                transition: "0.2s",
              }}
            >
              Hapus
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

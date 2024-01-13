export const Todo = ({ todos = [], handleDeleteTodo, handleToggleTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="list-group-item d-flex justify-content-between"
        >
          <span className={`align-self-center`}>{todo.description}</span>
          <div>
            <button
              className={`btn ${!todo.done ? "btn-warning" : "btn-success"}`}
              disabled={todo.done}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {!todo.done ? "Pendiente" : "Hecho"}
            </button>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="btn btn-danger"
            >
              Eliminar
            </button>
          </div>
        </li>
      ))}
    </>
  );
};

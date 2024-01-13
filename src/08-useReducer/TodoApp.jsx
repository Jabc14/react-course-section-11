import { useTodos } from "./hooks/useTodos";
import { Todo } from "./Todo";
import { TodoAdd } from "./TodoAdd";

export const TodoApp = () => {
  const {
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todos,
    todosCount,
    pendingTodosCount,
  } = useTodos();
  return (
    <>
      <h1>
        TODOS: {todosCount} {""}
        <small>pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            <Todo
              todos={todos}
              handleDeleteTodo={handleDeleteTodo}
              handleToggleTodo={handleToggleTodo}
            />
          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

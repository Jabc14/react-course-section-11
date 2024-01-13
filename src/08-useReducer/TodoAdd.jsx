import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleNewTodo }) => {
  const { todo_input, onChange, onReset } = useForm({
    todo_input: "",
  });

  const submit = (e) => {
    e.preventDefault();

    if (todo_input.length <= 0) return;

    const newTodo = {
      id: new Date().getTime(),
      description: todo_input,
      done: false,
    };
    handleNewTodo(newTodo);
    onReset();
  };

  return (
    <form>
      <input
        type="text"
        placeholder="¿Qué hacer?"
        className="form-control"
        name="todo_input"
        value={todo_input}
        onChange={onChange}
      />

      <button
        onClick={submit}
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Agregar
      </button>
    </form>
  );
};

import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";
import DoneButton from "./DoneButton";
import InputForm from "./InputForm";
import Todo from "./Todo";
// import { Todo as TodoType } from "../types/todo";

// interface TodoListProps {
//   todos: TodoType[];
//   onDelete: (id: string) => void;
//   onDone: (id: string) => void;
// }

// const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onDone }) => {
const TodoList: React.FC = () => {
  return (
    <div>
      <InputForm />
      <AddButton />
      <ul style={{ listStyle: "none", padding: 0 }}>
        <Todo />
        {/* {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onDone={onDone}
          />
        ))} */}
      </ul>
    </div>
  );
};

export default TodoList;

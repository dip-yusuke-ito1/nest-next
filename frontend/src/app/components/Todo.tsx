import DeleteButton from "@/app/components/DeleteButton";
import DoneButton from "@/app/components/DoneButton";
// import { TodoType } from "@/app/types/todo";

// interface TodoProps {
//   todo: TodoType;
//   onDelete: (id: string) => void;
//   onDone: (id: string) => void;
// }

// const Todo: React.FC<TodoProps> = ({ todo, onDelete, onDone }) => {
const Todo: React.FC = () => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: "#f9f9f9",
        borderRadius: "5px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <DoneButton />
      <span
        style={{
            // textDecoration: todo.completed ? "line-through" : "none",
            flex: 1,
            marginRight: "10px",
        }}
      >
        TODO
      </span>
      <div style={{ display: "flex", gap: "5px" }}>
        {/* <DoneButton onClick={() => onDone(todo.id)} />
        <DeleteButton onClick={() => onDelete(todo.id)} /> */}
        <DeleteButton />
      </div>
    </li>
  );
};

export default Todo;

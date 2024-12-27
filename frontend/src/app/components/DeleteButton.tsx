// interface DeleteButtonProps {
//   onClick: () => void;
// }

const DeleteButton: React.FC = () => {
  return (
    <button
      // onClick={onClick}
      style={{
        padding: "5px 10px",
        fontSize: "14px",
        backgroundColor: "#f44336",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Delete
    </button>
  );
};

export default DeleteButton;

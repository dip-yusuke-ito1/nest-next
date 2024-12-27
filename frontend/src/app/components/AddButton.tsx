// interface AddButtonProps {
//   onClick: () => void;
// }

const AddButton: React.FC = () => {
  return (
    <button
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#4caf50",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Add
    </button>
  );
};

export default AddButton;

// interface DoneButtonProps {
//   onClick: () => void;
// }

// const DoneButton: React.FC<DoneButtonProps> = ({ onClick }) => {
const DoneButton: React.FC = () => {
  return (
    <input
      type="checkbox"
      // onClick={onClick}
      style={{
        padding: "5px 10px",
        fontSize: "14px",
        backgroundColor: "#2196f3",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    />
  );
};

export default DoneButton;

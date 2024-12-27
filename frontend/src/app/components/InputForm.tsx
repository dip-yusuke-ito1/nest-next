// interface InputFormProps {
//   value: string;
//   onChange: (value: string) => void;
// }

// const InputForm: React.FC<InputFormProps> = ({ value, onChange }) => {
const InputForm: React.FC = () => {
  return (
    <input
      type="text"
      // value="ssssss"
      // onChange={(e) => onChange(e.target.value)}
      placeholder="New Task"
      style={{
        padding: "10px",
        width: "70%",
        marginRight: "10px",
        fontSize: "16px",
      }}
    />
  );
};

export default InputForm;

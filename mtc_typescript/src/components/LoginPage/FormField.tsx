import { TextField, TextFieldProps } from "@mui/material";

const FormTextField: React.FC<TextFieldProps> = ({
  label,
  type,
  value,
  onChange,
  onKeyUp,
  ...props
}) => {
  return (
    <>
      <TextField
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        {...props}
      />
    </>
  );
};

export default FormTextField;

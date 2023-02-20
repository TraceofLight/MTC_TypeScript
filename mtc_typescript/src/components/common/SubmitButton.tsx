import { Button, ButtonProps } from "@mui/material";

interface SubmitButtonProps extends ButtonProps {
  onClick?: () => void;
  contains?: React.ReactFragment;
}

const SubmitButton = ({
  onClick,
  contains,
  ...props
}: SubmitButtonProps): JSX.Element => {
  return (
    <>
      <Button onClick={onClick} {...props}>
        {contains || <div>Submit</div>}
      </Button>
    </>
  );
};

export default SubmitButton;

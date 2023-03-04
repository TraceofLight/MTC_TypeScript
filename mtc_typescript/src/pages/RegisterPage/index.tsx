import { ButtonProps, Container } from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "pages/LoginPage/Styles/LoginPage.css";

type Variant = "text" | "outlined" | "contained" | undefined;

interface SubmitButtonProps extends ButtonProps {
  className?: string;
  variant?: Variant;
  onClick?: () => Promise<void>;
  contains?: React.ReactNode;
}

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div>회원가입 페이지</div>
      </Container>
    </>
  );
};

export default RegisterPage;

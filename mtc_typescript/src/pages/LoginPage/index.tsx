import { ButtonProps, TextFieldProps, Stack, Container } from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticationInstance } from "FirebaseConfig";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import Logo from "components/common/Logo";
import FormTextField from "components/common/FormField";
import SubmitButton from "components/common/SubmitButton";

import "pages/LoginPage/Styles/LoginPage.css";

type Variant = "text" | "outlined" | "contained" | undefined;

interface SubmitButtonProps extends ButtonProps {
  className?: string;
  variant?: Variant;
  onClick?: () => Promise<void> | void;
  contains?: React.ReactNode;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginHandler = async () => {
    try {
      await signInWithEmailAndPassword(authenticationInstance, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleLoginHandler = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const user = await signInWithPopup(authenticationInstance, provider);
      console.log(user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const formSettings = [
    {
      label: "E-mail",
      value: email,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(event.target.value),
    },
    {
      label: "Password",
      type: "password",
      value: password,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(event.target.value),
    },
  ];

  const loginButtonSettings = [
    {
      onClick: loginHandler,
      contains: <>Login</>,
      variant: "outlined" as Variant,
      className: "login-button",
    },
    {
      onClick: googleLoginHandler,
      contains: (
        <>
          <img
            src={require("assets/images/google.png")}
            alt="google logo"
            width={"20"}
          />
          <p>&nbsp; Google Login</p>
        </>
      ),
      variant: "contained" as Variant,
      className: "google-login-button",
    },
  ];

  const registerAndFindButtonSettings = [
    {
      onClick: () => navigate("/register"),
      contains: <>가입하기</>,
      variant: "outlined" as Variant,
    },
    {
      onClick: () => navigate("/password-recovery"),
      contains: <>비밀번호 찾기</>,
      variant: "outlined" as Variant,
    }
  ]

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
        <Stack spacing={2} direction="column" className="login-stack">
          <Logo />
          {formSettings.map(
            ({ label, value, onChange }: TextFieldProps, index: number) => (
              <FormTextField
                key={index}
                label={label}
                value={value}
                onChange={onChange}
                className="login-form-text-field"
              />
            )
          )}
          {loginButtonSettings.map(
            (
              { onClick, contains, variant, className }: SubmitButtonProps,
              index: number
            ) => (
              <SubmitButton
                key={index}
                onClick={onClick}
                contains={contains}
                variant={variant}
                className={className}
              />
            )
          )}
          <Stack spacing={2} direction="row" justifyContent={"space-between"} className="config-buttons">
            {registerAndFindButtonSettings.map(
              (
                { onClick, contains, variant, className }: SubmitButtonProps,
                index: number
              ) => (
                <SubmitButton
                  key={index}
                  onClick={onClick}
                  contains={contains}
                  variant={variant}
                  className={className}
                />
              )
            )}
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default LoginPage;

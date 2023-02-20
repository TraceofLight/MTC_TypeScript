import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { authenticationInstance } from "FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import Logo from "components/common/Logo";
import FormTextField from "components/common/FormField";
import SubmitButton from "components/common/SubmitButton";

interface Field {
  label: String;
  value: String;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface LoginProps {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  const loginHandler = async ({ email, password }: LoginProps) => {
    try {
      await signInWithEmailAndPassword(authenticationInstance, email, password);
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
      onclick: loginHandler,
    },
  ];

  return (
    <>
      <Logo />
      {formSettings.map(({ label, value, onChange }: Field, index: number) => (
        <FormTextField
          key={index}
          label={label}
          value={value}
          onChange={onChange}
        />
      ))}
      <SubmitButton />
    </>
  );
};

export default LoginPage;

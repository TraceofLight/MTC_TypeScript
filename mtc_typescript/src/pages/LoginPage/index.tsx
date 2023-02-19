import React, { useState } from "react";

import Logo from "components/common/Logo";
import FormTextField from "components/LoginPage/FormField";

type Field = {
  label: String;
  value: String;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");

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
    </>
  );
};

export default LoginPage;

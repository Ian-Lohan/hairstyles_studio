import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import "../../styles/Login.css"; // Import the CSS file for styling
import Button from "../../components/commons/Button/Button";
import Input from "../../components/commons/Input/Input";
import Label from "../../components/commons/Label/Label";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = (props) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;

    if (!name) {
      setNameError("Preencha seu nome.");
      valid = false;
    } else {
      setNameError("");
    }
    if (!password) {
      setPasswordError("Preencha sua senha.");
      valid = false;
    } else {
      setPasswordError("");
    }
    if (password != confirmPassword) {
      setConfirmPasswordError("A senha não confere.");
      valid = false;
    } else {
      setConfirmPasswordError("");
    }
    if (!valid) return;
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Cadastro</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <Label value="Nome" htmlFor="name" />
          <Input
            type="text"
            placeholder="Insira seu nome"
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="error">{nameError}</div>
          <Label value="Senha" htmlFor="password" />
          <Input
            type="password"
            placeholder="Insira sua senha"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="error">{passwordError}</div>
          <Label value="Confirmar Senha" htmlFor="confirm-password" />
          <Input
            type="password"
            placeholder="Confirme a sua senha"
            value={confirmPassword}
            id="confirm-password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="error">{confirmPasswordError}</div>
          <Button className="green" type="submit" onClick={() => {}}>
            Cadastrar
          </Button>
        </form>
        <p className="register">
          Já conta? <Link to="/login">Entrar!</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

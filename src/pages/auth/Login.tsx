import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Auth.css";
import Form from "../../components/layout/Form";
import Button from "../../components/commons/Button/Button";
import Input from "../../components/commons/Input/Input";
import Label from "../../components/commons/Label/Label";

interface LoginProps {}

const Login: React.FC<LoginProps> = (props) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
    if (!valid) return;
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Login</h1>
        <Form className="login-form" onSubmit={handleSubmit}>
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
          <Button className="green" type="submit" onClick={() => {}}>
            Entrar
          </Button>
        </Form>
        <p className="register">
          Não possui conta? <Link to="/cadastro">Cadastre-se!</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

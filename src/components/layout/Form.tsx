import React, { ReactNode } from "react";
import "../../styles/Form.css";
import Input from "../commons/Input/Input";
import Label from "../commons/Label/Label";
import Button from "../commons/Button/Button";

interface FormProps {
  className: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

const Form: React.FC<FormProps> = ({ className, onSubmit, children }) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;

import React from "react";
import "../../../styles/Input.css"; // Import the CSS file for styling

interface InputProps {
  type?: string; // Type of the input (text, password, email, etc.)
  placeholder?: string; // Placeholder text for the input
  value?: string; // Value of the input
  id?: string; // ID of the input
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Function to call when the input changes
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean; // Optional: Disable the input
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  id,
  onChange,
  error,
  errorMessage,
  disabled,
}) => {
  return (
    <div className={`input-wrapper${error ? "input-error" : ""}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        onChange={onChange}
        disabled={disabled}
      />
      {error && (
        <span className="input-icon" title={errorMessage || "Erro"}>
          &#9888;
        </span>
      )}
    </div>
  );
};

export default Input;

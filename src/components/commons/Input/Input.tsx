import React from 'react';
import '../../../styles/Input.css'; // Import the CSS file for styling

interface InputProps {
  type?: string; // Type of the input (text, password, email, etc.)
  placeholder?: string; // Placeholder text for the input
  value?: string; // Value of the input
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Function to call when the input changes
  disabled?: boolean; // Optional: Disable the input
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, disabled }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

export default Input;
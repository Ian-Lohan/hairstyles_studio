import React, { ReactNode } from 'react';
import '../../../styles/Button.css'; // Import the CSS file for styling

interface ButtonProps {
  children: ReactNode; // The content inside the button
  onClick: () => void; // Function to call when the button is clicked
  className?: string; // The class of the button
  disabled?: boolean; // Optional: Disable the button
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, disabled, type }) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button;
import React, { ReactNode } from 'react';
import '../../../styles/Button.css'; // Import the CSS file for styling

interface ButtonProps {
  children: ReactNode; // The content inside the button
  onClick: () => void; // Function to call when the button is clicked
  color?: string; // Optional: Color of the button
  textColor?: string; // Optional: Text color of the button
  // Add other button props here if needed
  // disabled?: boolean; // Optional: Disable the button
  // type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, color, textColor }) => {
  return (
    <button
      style={{
      ...(color ? { backgroundColor: `var(${color})` } : {}),
      ...(textColor ? { color: `var(${textColor})` } : {})
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;
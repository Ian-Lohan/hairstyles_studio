import React from 'react';
import '../../../styles/Label.css'

interface LabelProps {
  value: string;
  htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ value, htmlFor }) => {
  return (
    <label htmlFor={htmlFor}>{value}</label>
  )
}

export default Label;
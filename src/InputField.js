// src/components/InputField.js
import React from 'react';

const inputStyle = {
  marginBottom: '10px',
  padding: '8px',
  width: '100%',
  boxSizing: 'border-box',
};

const InputField = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} style={inputStyle} />;
};

export default InputField;

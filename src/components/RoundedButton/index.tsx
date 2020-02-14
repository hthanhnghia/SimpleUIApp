import React from 'react';
import './index.css';

interface RoundedButtonProps {
  color?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  height?: number;
  width?: number;
  borderRadius?: number;
  buttonText?: string;
}

function RoundedButton({
  color = 'black',
  backgroundColor = 'blue',
  backgroundImage = 'linear-gradient(to right, #F0BA0E , #F9D636)',
  height = 35,
  width = 120,
  borderRadius = 25,
  buttonText = 'Click here!'
}: RoundedButtonProps) {
  return (
    <button
      className="rounded-button"
      style={{
        color: color,
        height: height,
        width: width,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        backgroundImage: backgroundImage
      }}
    >
      <b>{buttonText}</b>
    </button>
  );
}
export default RoundedButton;

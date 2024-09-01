import React from "react";

interface Props {
  text: string;
  onClick: () => void;
  margin?: string;
}
const Button = ({ text, onClick, margin = "" }: Props) => {
  return (
    <button
      className="rounded-full py-2 px-5 uppercase text-sm text-white bg-gray-600 hover:bg-primary transition-all duration-300 ease-linear"
      onClick={onClick}
      style={{
        margin,
      }}
    >
      {text}
    </button>
  );
};

export default Button;

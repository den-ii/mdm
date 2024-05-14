import React from "react";

interface IButtons {
  onClick?: () => void;
  padding?: string;
  children?: React.ReactNode;
  text?: string;
}

function Buttons({ onClick, padding = "px-4 py-3", children, text }: IButtons) {
  if (children)
    return (
      <button
        onClick={onClick}
        className={`bg-primary_700 transition duration-500 ease-in-out ${padding} hover:bg-primary_900 rounded-lg text-white`}
      >
        {children}
      </button>
    );
  if (text)
    return (
      <button
        onClick={onClick}
        className={`bg-primary_700 transition duration-500 ease-in-out hover:bg-primary_900 ${padding} rounded-lg text-white`}
      >
        {text}
      </button>
    );
}

export default Buttons;

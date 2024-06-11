import React from "react";

interface IButtons {
  onClick?: () => void;
  padding?: string;
  children?: React.ReactNode;
  text?: string;
  styles?: string;
  primary?: boolean;
}

function Buttons({
  primary,
  onClick,
  padding = "px-4 py-3",
  children,
  styles,
}: IButtons) {
  if (primary)
    return (
      <button
        onClick={onClick}
        className={`bg-primary_700 transition duration-500 ease-in-out min-w-[170px] ${padding} ${styles} hover:bg-primary_900 rounded-lg text-white`}
      >
        {children}
      </button>
    );
  else {
    return (
      <button
        className={`bg-primary_100 transition duration-500 ease-in-out px-4 py-3 min-w-[170px]
  rounded-lg text-primary_700 ${padding} ${styles}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Buttons;

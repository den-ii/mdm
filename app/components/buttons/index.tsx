import React from "react";

interface IButtons {
  onClick?: () => void;
  padding?: string;
  children?: React.ReactNode;
  text?: string;
  styles?: string;
  primary?: boolean;
  noWidth?: boolean;
}

function Buttons({
  primary,
  onClick,
  padding = "px-4 py-3",
  children,
  styles,
  noWidth,
}: IButtons) {
  if (primary)
    return (
      <button
        onClick={onClick}
        className={`bg-primary_700 transition duration-500 ease-in-out ${
          noWidth ? "" : "min-w-[170px]"
        } ${padding} ${styles} hover:bg-primary_900 rounded-lg text-white`}
      >
        {children}
      </button>
    );
  else {
    return (
      <button
        className={`transition duration-500 ease-in-out hover:bg-primary_100  px-4 py-3 ${
          noWidth ? "" : "min-w-[170px]"
        }
  rounded-lg text-primary_700 ${padding} ${styles}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Buttons;

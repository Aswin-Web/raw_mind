import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button className="border-2 border-white p-3 rounded-xl text-lg cursor-pointer m-4">
      {text}
    </button>
  );
};

export default Button;

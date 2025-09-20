import React from "react";

const Paragraph = ({ text }: { text: string }) => {
  return <p className="text-lg font-light m-2">{text} </p>;
};

export default Paragraph;

"use client";

import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownRendererProps {
  content: string;
}

function MarkdownToHtml(rawText: string) {
  // Split the text into lines
  const lines = rawText.split("\n");

  return (
    <div>
      {lines.map((line, index) => {
        line = line.trim();

        // Headers
        if (line.startsWith("### "))
          return (
            <h3 className="text-xl my-2  font-bold" key={index}>
              {line.slice(4)}
            </h3>
          );
        if (line.startsWith("## "))
          return (
            <h2 className="text-2xl my-2  font-bold" key={index}>
              {line.slice(3)}
            </h2>
          );
        if (line.startsWith("# "))
          return (
            <h1 className="text-4xl my-2 font-bold" key={index}>
              {line.slice(2)}
            </h1>
          );

        // Bold text
        const parts = line.split(/(\*\*.*?\*\*)/g).map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong className="font-extrabold" key={i}>
                {part.slice(2, -2)}
              </strong>
            );
          }
          return part;
        });

        // Paragraphs
        return <p key={index}>{parts}</p>;
      })}
    </div>
  );
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="max-w-4xl mx-auto p-6  shadow-md rounded-md prose prose-gray overflow-x-hidden">
      {MarkdownToHtml(content)}
    </div>
  );
};

export default MarkdownRenderer;

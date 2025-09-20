"use client";

import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="max-w-4xl mx-auto p-6  shadow-md rounded-md prose prose-gray">
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-bold my-4" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl font-semibold my-3" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-2xl font-semibold my-2" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-base text-slate-100-700 my-2" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="ml-5 list-disc text-slate-50 my-1" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-bold text-slate-200" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;

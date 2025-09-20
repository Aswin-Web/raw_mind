import Heading from "@/components/Heading";
import HomeButton from "@/components/Home";
import Paragraph from "@/components/Paragraph";
import React from "react";

const page = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center text-center">
          <p className="text-6xl font-bold text-center m-2">Hello User </p>
          <Paragraph text="Version 2 is not yet built. Hire Aswin as your developer to unlock next-level interaction — upload files, ask questions, and get instant answers, all powered by Retrieval-Augmented Generation (RAG)." />
        <HomeButton text="GO BACK" navlink="/" />
        </div>{" "}
      </main>
    </div>
  );
};

export default page;

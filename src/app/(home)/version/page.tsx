"use client";
import { useRouter } from "next/navigation"; // ✅ for App Router
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import React from "react";
import Paragraph from "../../../components/Paragraph";

const VersionPage = () => {
  const router = useRouter();

  const hanldeNavigate = (route: string) => {
    router.push("/version/" + route);
  };
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center">
            <Heading text="Please select the version" />
          </div>
          <div className="flex items-center flex-col">
            {/* Version 1 */}
            <div className="text-center">
              <span onClick={() => hanldeNavigate("v1")}>
                <Button text="Version-Standard" />
              </span>
              <Paragraph text="Description: In this version you can upload the file. The AI Engine will give you the Structured Output" />
            </div>
            <br />
            <hr />
            {/* Version 2 */}
            <div className="text-center">
              {" "}
              <span onClick={() => hanldeNavigate("v2")}>
                <Button text="Version-Advanced" />
              </span>
              <Paragraph text="Description: In this version you can upload the file. You can do end to end messaging with the file " />
            </div>
          </div>
        </div>{" "}
      </main>
    </div>
  );
};

export default VersionPage;

"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

const HomeButton = ({ navlink, text }: { navlink: string; text: string }) => {
  const router = useRouter();

  const hanldeNavigate = () => {
    router.push(navlink);
  };
  return (
    <span onClick={hanldeNavigate}>
      <Button text={text} />
    </span>
  );
};

export default HomeButton;

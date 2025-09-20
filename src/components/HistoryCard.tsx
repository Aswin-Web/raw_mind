"use client";
import { useRouter } from "next/navigation"; 

import React from "react";
import Button from "./Button";
import Paragraph from "@/components/Paragraph";

const HistoryCard = ({
  id,
  original_file_name,
  internal_file_name,
  navlink,
  created_at,
}: {
  id: number;
  original_file_name: string;
  internal_file_name: string;
  navlink: string;
  created_at: string;
}) => {
  const router = useRouter();

  const hanldeNavigate = (route: string) => {
    router.push(route);
  };
  return (
    <div className="border-2 border-white w-full text-center m-4">
      <Paragraph text={original_file_name} />
      <p className="mx-2">created_at: {new Date(created_at).toLocaleString()}</p>
      <span onClick={() => hanldeNavigate(navlink)}>
        <Button text="View ->"></Button>
      </span>
    </div>
  );
};
export default HistoryCard;

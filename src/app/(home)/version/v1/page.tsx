"use client";

import { useRouter } from "next/navigation";
import Heading from "@/components/Heading";
import HistoryCard from "@/components/HistoryCard";
import Paragraph from "@/components/Paragraph";
import React, { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [history, setHistory] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const baseResultUrl = "/version/v1/chat/";

  useEffect(() => {
    getHistories();
  }, []);

  const getHistories = async () => {
    const res = await fetch("/api/v1/history/" + "v1");
    const data = await res.json();
    const historydata = data.history;
    setHistory(historydata);
  };

  const handleUpload = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    // Validate file type
    if (file.type !== "text/plain") {
      alert("Only .txt files are allowed.");
      e.target.value = null; // reset input
      return;
    }

    // Validate file size (4 KB = 4096 bytes)
    if (file.size > 4096) {
      alert("File size must be less than 4KB.");
      e.target.value = null; // reset input
      return;
    }
    setFile(e.target.files[0]); // store selected file
  };

  const handleSave = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("version", "v1");

    try {
      const res = await fetch("/api/v1/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Upload response:", data);
      router.push(baseResultUrl + data.file_id);
    } catch (error) {
      alert("Upload error:" + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-4 p-4">
      <div>
        <Heading text="Please upload a file" />
        <div className="bg-white text-black mt-4 p-2 text-center">
          <input
            type="file"
            placeholder="Upload a .txt file"
            onChange={handleUpload}
            disabled={isLoading}
            accept=".txt"
          />
          {isLoading ? (
            <>
              <button
                // onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
              >
                Loading...
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
              >
                Save
              </button>
            </>
          )}
        </div>
      </div>

      {/* History */}
      <div className="mt-8">
        <Heading text="History" />
        <div className="flex flex-row flex-wrap gap-2.5 items-center justify-center">
          {history.map((item: any, ind) => {
            return (
              <div key={item.id} className="w-3/12 m-2">
                <HistoryCard
                  id={item.id}
                  internal_file_name={item.internal_file_name}
                  original_file_name={
                    String(ind + 1) + "). " + item.orignal_file_name
                  }
                  created_at={item.created_at}
                  navlink={baseResultUrl + item.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;

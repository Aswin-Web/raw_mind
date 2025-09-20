"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import FormatText from "../../../../../../components/FormatText";

const Page = () => {
  const params = useParams();
  const history_id = params?.history_id as string; // dynamic param from URL
  const [meaningfulData, setMeaningfulData] = useState<any>(null);

  useEffect(() => {
    // Only fetch after router is ready

    const getHistories = async () => {
      try {
        const res = await fetch("/api/v1/history/v1/" + history_id);
        const data = await res.json();
        setMeaningfulData(data.history);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    getHistories();
  }, []); // run effect when router is ready

  return (
    <>
      {!meaningfulData ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>
            <div className="m-4 text-center mb-6 bg-slate-700 text-slate-300 p-4 rounded-md shadow-md max-w-2xl mx-auto">
              <p className="text-lg font-semibold text-slate-50">
                File info: {meaningfulData.orignal_file_name}
              </p>
              <p className="text-gray-500 text-sm">
                Created at:{" "}
                {new Date(meaningfulData.created_at).toLocaleString()}
              </p>
            </div>

            <FormatText content={meaningfulData.meaning_ful_data} />
          </div>
        </>
      )}
    </>
  );
};

export default Page;

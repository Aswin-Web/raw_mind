"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const hanldeNavigate = () => {
    router.push("/version");
  };
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-medium m-2">Hi Sir/Mam,</h1>
          <p className="text-6xl font-bold text-center m-2 w-11/12">
            Get your meaningful content from a raw file...{" "}
          </p>
          <span onClick={hanldeNavigate}>
            <Button text={`Get Started ->`} />
          </span>
        </div>{" "}
      </main>
    </div>
  );
}

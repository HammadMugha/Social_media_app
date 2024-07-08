
import Feeds from "@/components/Feeds";
import News from "@/components/News";
import Sidebar from "@/components/Sidebar";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <div className="pt-[120px]">
        <div className="max-w-[1150px] flex justify-between gap-[20px] mx-auto px-4">
        {/*sidebar section */}
        <Sidebar />
        {/* Feeds section */}
        <Feeds />
        {/* News section */}
        <News />
        </div>
      </div>
    </>
  );
}

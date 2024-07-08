import { navItems } from "@/lib/constants/data";
import Link from "next/link";
import React from "react";

export default function MenuItems() {
  return (
    <div className="flex items-center gap-6">
      {navItems.map((item, i) => (
        <Link
          href={item.src}
          key={i}
          className="flex items-center cursor-pointer text-[#666666] hover:text-black flex-col gap-1"
        >
          <span>{item.icon}</span>
          <h3 className="text-sm">{item.text}</h3>
        </Link>
      ))}
    </div>
  );
}

"use client"
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  { label: "Dashboard", path: "/app/dashboard" },
  { label: "Account", path: "/app/account" },
];

const AppHeader = () => {
    const activePathname =usePathname();
    console.log(activePathname);
  return (
    <header className="flex justify-between items-center border-b border-white/10 py-2">
      <Logo />
      <nav>
        <ul  className=" flex gap-2 text-xs">
            {routes.map((route,index)=>{
                return (
                   <li key={index}>
                    <Link href={route.path} className={`cn(" text-white/70  rounded-sm hover:text-white py-2 transition-all"),{"bg-black/10 text-white":route.path===activePathname}`}>
                    {route.label}
                    </Link>

                   </li> 
                )
            })}
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;

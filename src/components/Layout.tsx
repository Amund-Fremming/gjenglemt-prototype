import React from "react";
import Navbar from "./Navbar";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:hidden">
        <main>{children}</main>
        <Navbar />
      </div>

      <h1 className="hidden xs:flex sm:flex md:flex lg:flex' xl:flex 2xl:flex justify-center items-center h-screen text-9xl font-serif text-gray-600 underline underline-offset-6">
        Nope
      </h1>
    </>
  );
}

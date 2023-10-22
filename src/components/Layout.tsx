import React from "react";
import Navbar from "./Navbar";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <main>{children}</main>
      <Navbar />
    </div>
  );
}

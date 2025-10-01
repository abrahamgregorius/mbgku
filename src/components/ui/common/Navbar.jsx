import { Moon } from "lucide-react";
import React from "react";
import { SidebarTrigger } from "../sidebar";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <SidebarTrigger></SidebarTrigger>
    </div>
  );
};

export default Navbar;

import React from "react";
import { AppSidebar } from "../app-sidebar";
import Navbar from "../ui/common/Navbar";
import { SidebarInset, SidebarMenuSkeleton } from "../ui/sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full flex min-h-screen">
      {/* <div>
        <AppSidebar />
      </div>
      <div className="w-full bg-pink-200">
        <div className="w-full bg-green-100">
          <Navbar />
        </div>
        <div className="bg-blue-100 p-4 h-screen">
          {children}
        </div>
      </div> */}
      <div className="flex flex-1">
        <AppSidebar />
        <SidebarInset>
          <div className="px-3">
            <Navbar></Navbar>
          </div>
          {children}
        </SidebarInset>
      </div>
    </div>
  );
};

export default DashboardLayout;

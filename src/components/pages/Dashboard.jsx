import React from "react";
import DashboardLayout from "../layout/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-1 flex-col gap-4 p-4 ">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="bg-pink-200 aspect-video rounded-xl" />
          <div className="bg-blue-200 aspect-video rounded-xl" />
          <div className="bg-yellow-200 aspect-video rounded-xl" />
        </div>
        <div className="bg-red-300 h-[100vh] flex-1 rounded-xl md:min-h-min"></div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

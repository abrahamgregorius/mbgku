import React from "react";
import DashboardLayout from "../layout/DashboardLayout";
import AppBarChart from "../ui/common/AppBarChart";
import CardDashboard from "../ui/common/CardDashboard";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 ">
          <div className=" p-4 rounded-lg">
            <CardDashboard
              header={"Jumlah pengiriman dalam sebulan"}
              title={"$1,250.00"}
              stat={"+12.5%"}
              description={"Trending up this month"}
              footer={"Visitors for the last 6 months"}
            />
          </div>
          <div className=" p-4 rounded-lg">
            <CardDashboard
              header={"Jumlah MBG yang dikirim hari ini"}
              title={"$1,250.00"}
              stat={"+12.5%"}
              description={"Trending up this month"}
              footer={"Visitors for the last 6 months"}
            />
          </div>
          <div className=" p-4 rounded-lg">
            <CardDashboard
              header={"Jumlah Rating 5"}
              title={"berapa/banyakMBG"}
              stat={"+12.5%"}
              description={"Trending up this month"}
              footer={"Visitors for the last 6 months"}
            />
          </div>
          <div className=" p-4 rounded-lg">
            <CardDashboard
              header={"Kasus Keracunan"}
              title={"$1,250.00"}
              stat={"+12.5%"}
              description={"Trending up this month"}
              footer={"Visitors for the last 6 months"}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg">
            <AppBarChart></AppBarChart>
          </div>
          <div className="bg-green-200 p-4 rounded-lg"></div>
          <div className="bg-green-200 p-4 rounded-lg col-span-2"></div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

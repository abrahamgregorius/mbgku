import { useEffect, useState } from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import CardDashboard from "../../ui/common/CardDashboard";
import { DataTable } from "../../ui/kantin/Kantin-Dashboard-Data/TableData/DataTable";
import { columns } from "../../ui/kantin//Column";

async function getData() {
  return [
    {
      id: "INV001",
      status: "Paid",
      amount: "$250.00",
      sekolah: "Tarsisius 2 ",
    },
    {
      id: "INV002",
      status: "Pending",
      amount: "$150.00",
      sekolah: "Sekolah A",
    },
    {
      id: "INV003",
      status: "Unpaid",
      amount: "$350.00",
      sekolah: "Sekolah Best",
    },
    {
      id: "INV004",
      status: "Paid",
      amount: "$450.00",
      sekolah: "Credit Card",
    },
    {
      id: "INV005",
      status: "Paid",
      amount: "$550.00",
      sekolah: "PayPal",
    },
    {
      id: "INV006",
      status: "Pending",
      amount: "$200.00",
      sekolah: "Bank Transfer",
    },
    {
      id: "INV007",
      status: "Unpaid",
      amount: "$300.00",
      sekolah: "Credit Card",
    },
    {
      id: "INV007",
      status: "Unpaid",
      amount: "$300.00",
      sekolah: "Credit Card",
    },
    {
      id: "INV007",
      status: "Unpaid",
      amount: "$300.00",
      sekolah: "Credit Card",
    },
  ];
}

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getData();
      setData(fetchedData);
    }
    fetchData();
  }, []);
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
        <div className="grid grid-cols-1 gap-4">
          <div className="p-4 rounded-lg">
            <DataTable columns={columns} data={data}></DataTable>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

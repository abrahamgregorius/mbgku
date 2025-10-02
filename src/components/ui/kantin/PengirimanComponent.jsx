import { Plus } from "lucide-react";
import { Button } from "../button";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import ProductTable from "./ProductTable";
import { useEffect, useState } from "react";
import { columns } from "./Kantin-Pengiriman-Data/Column";

// masih data dummy nanti pake useContext aja ya buat kirim data nya:
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

const PengirimanComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getData();
      setData(fetchedData);
    }
    fetchData();
  }, []);
  return (
    <Card className={"mt-8 flex flex-col shadow-none border-none"}>
      <CardHeader className={"flex justify-between px-4"}>
        <div className="flex justify-between items-center">
          <div className="">
            <CardTitle className={"font-bold text-2xl"}>Pengiriman</CardTitle>
          </div>
        </div>
        <Button>
          Create Pengiriman <Plus />
        </Button>
      </CardHeader>
      <CardContent>
        <ProductTable data={data} columns={columns}></ProductTable>
      </CardContent>
    </Card>
  );
};

export default PengirimanComponent;

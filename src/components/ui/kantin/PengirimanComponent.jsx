import { Card, CardContent, CardHeader, CardTitle } from "../card";
import PengirimanTabel from "./Kantin-Pengiriman-Data/PengirimanTabel";
import { columns } from "./Column";
import CreateDialog from "./Kantin-Dialog/CreateDialog";
import { usePengirimanStore } from "../../../store/usePengirimanStore";
import { Button } from "../button";
import { Plus } from "lucide-react";

const PengirimanComponent = () => {
  const { items, openDialog } = usePengirimanStore();

  return (
    <Card className={"mt-8 flex flex-col shadow-none border-none"}>
      <CardHeader className={"flex justify-between px-4"}>
        <div className="flex justify-between items-center">
          <div className="">
            <CardTitle className={"font-bold text-2xl"}>Pengiriman</CardTitle>
          </div>
        </div>

        <Button className={"h-10"} onClick={() => openDialog()}>
          Tambah Pengiriman <Plus />
        </Button>
        <CreateDialog />
      </CardHeader>
      <CardContent>
        <PengirimanTabel data={items} columns={columns}></PengirimanTabel>
      </CardContent>
    </Card>
  );
};

export default PengirimanComponent;

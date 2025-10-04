import { cn } from "../../../lib/utils";
import PengirimanDropDown from "./Kantin-Pengiriman-Data/PengirimanDropDown";
export const columns = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "sekolah",
    header: "Sekolah",
  },
  {
    accessKey: "sku",
    header: "SKU",
  },
  {
    accessKey: "supplier",
    header: "Supplier",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <div
          className={cn(
            `p-1 rounded-md w-max text-xs font-medium`,
            status.toLowerCase() === "pending" && "bg-yellow-500/50",
            status.toLowerCase() === "unpaid" && "bg-red-500/50",
            status.toLowerCase() === "paid" && "bg-green-500/50"
          )}
        >
          {status}
        </div>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessKey: "action",
    header: "Action",
    cell: ({ row }) => {
      return <PengirimanDropDown row={row}></PengirimanDropDown>;
    },
  },
];

import { cn } from "../../../../../lib/utils";
export const columns = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "sekolahName",
    header: "Sekolah",
  },
  {
    accessorKey: "sku",
    header: "SKU",
  },
  {
    accessorKey: "supplier",
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
            `p-2 rounded-md w-max text-xs font-medium`,
            status.toLowerCase() === "pending" && "bg-yellow-500/50",
            status.toLowerCase() === "canceled" && "bg-red-500/50",
            status.toLowerCase() === "delivered" && "bg-green-500/50"
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
];

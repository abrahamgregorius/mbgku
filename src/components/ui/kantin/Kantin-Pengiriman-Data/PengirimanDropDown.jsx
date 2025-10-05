import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../dropdown-menu";
import { Button } from "../../button";
import { MoreHorizontal, PencilOff, Trash } from "lucide-react";
import { usePengirimanStore } from "../../../../store/usePengirimanStore";

const PengirimanDropDown = ({ row }) => {
  const { openDialog, deleteData } = usePengirimanStore();
  const handleEdit = () => {
    openDialog("edit", row); // buka modal
  };

  const handleDelete = () => {
    deleteData(row.id); // hapus data
  };
  const menuItems = [
    {
      icon: <PencilOff />,
      label: "Edit",
      className: "",
      onClick: () => handleEdit(),
    },
    { separator: true },
    {
      icon: <Trash className="text-red-500" />,
      label: "Delete",
      className: "text-red-500",
      onClick: () => handleDelete(),
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {menuItems.map((item, index) =>
          item.separator ? (
            <DropdownMenuSeparator key={index} />
          ) : (
            <DropdownMenuItem
              key={index}
              className={`flex items-center gap-1 p-2 ${item.className}`}
              onClick={item.onClick}
            >
              {item.icon}
              <span>{item.label}</span>
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PengirimanDropDown;

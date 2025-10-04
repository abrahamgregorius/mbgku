import { Input } from "../../input";
import { Button } from "../../button";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

import PaginationSelection from "../PaginationSelection";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const PengirimanTabel = ({ data, columns }) => {
  const [columnFilters, setColumnFilters] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const table = useReactTable({
    data,
    columns,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      pagination,
      columnFilters,
    },
  });
  return (
    <div>
      <div className="flex flex-col mb-8 mt-4">
        <div className="flex items-center justify-between">
          <Input
            placeholder="Search by name school..."
            className={"max-w-sm h-10"}
            value={table.getColumn("sekolah")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("sekolah")?.setFilterValue(event.target.value)
            }
          />
        </div>
      </div>

      {/* upcoming table */}
      <div className="rounded-md border-none">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="py-4" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between mt-5">
          <PaginationSelection
            pagination={pagination}
            setPagination={setPagination}
          />
          <div className="flex gap-4 items-center">
            <span className="text-sm text-gray-500">
              Page {pagination.pageIndex + 1} of {table.getPageCount()}
            </span>
            <div className="flex items-center justify-end space-x-2 py-4">
              <Button
                variant={"outline"}
                className={"size-9 w-12"}
                size={"sm"}
                onClick={() => {
                  table.setPageIndex(0);
                }}
                disabled={!table.getCanPreviousPage()}
              >
                <ChevronsLeft />
              </Button>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <ChevronLeft />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <ChevronRight />
              </Button>
              <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                  variant={"outline"}
                  className={"size-9 w-12"}
                  size={"sm"}
                  onClick={() => {
                    table.setPageIndex(table.getPageCount() - 1);
                  }}
                  disabled={!table.getCanNextPage()}
                >
                  <ChevronsRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PengirimanTabel;

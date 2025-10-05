import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { createPengirimanSchema } from "../../../../validations/pengiriman-validation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../select";

import { Button } from "../../button";
import { Plus } from "lucide-react";
import { Form, FormField, FormItem, FormLabel } from "../../form";
import FormInput from "../../common/FormInput";
import { Separator } from "../../separator";
import { usePengirimanStore } from "../../../../store/usePengirimanStore";

const CreateDialog = () => {
  const form = useForm({
    resolver: zodResolver(createPengirimanSchema),
    defaultValues: {
      quantity: 0,
      sekolahName: "",
      sku: "",
      supplier: "",
      status: "pending",
    },
  });
  // zustand
  const {
    isDialogOpen,
    mode,
    selectedItem,
    closeDialog,
    createData,
    updateData,
  } = usePengirimanStore();

  useEffect(() => {
    if (mode === "edit" && selectedItem) {
      form.reset(selectedItem);
    } else {
      form.reset({
        sekolahName: "",
        supplier: "",
        sku: "",
        quantity: 0,
        status: "pending",
      });
    }
  }, [mode, selectedItem, form]);

  const onSubmit = (value) => {
    if (mode === "edit") {
      updateData(value, selectedItem.id);
    } else {
      createData(value);
    }
    form.reset();
    closeDialog();
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={closeDialog} className="h-100">
      <DialogContent className={"px-7 p-8 "}>
        <DialogHeader>
          <DialogTitle className={"text-xl"}>
            {mode === "edit" ? "Edit Pengiriman" : "Tambah Pengiriman"}
          </DialogTitle>
          <DialogDescription>
            Isi form untuk {mode === "edit" ? "edit" : "tambah"} pengiriman
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 my-4">
              <div className="grid grid-cols-1 gap-4">
                <FormInput
                  form={form}
                  label={"Nama Sekolah"}
                  placeholder={"Masukan nama sekolah"}
                  type={"text"}
                  name={"sekolahName"}
                />
                <FormInput
                  form={form}
                  label={"Supplier name"}
                  placeholder={"Masukan nama supplier"}
                  type={"text"}
                  name={"supplier"}
                />
              </div>
              <div className="grid grid-cols-1 gap-7 items-start mt-4 lg:grid-cols-3">
                <div>
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="h-12 w-[180px] text-sm">
                            <SelectValue placeholder="Pilih status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="delivered">Delivered</SelectItem>
                            <SelectItem value="canceled">Canceled</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>

                <FormInput
                  form={form}
                  label={"SKU"}
                  placeholder={"SKU"}
                  type={"text"}
                  name={"sku"}
                />
                <FormInput
                  form={form}
                  label={"Quantity"}
                  placeholder={"0"}
                  type={"number"}
                  name={"quantity"}
                />
              </div>
              <div className="flex items-center justify-end gap-4">
                <Button className={"w-[100px] mt-4"} type="submit">
                  {mode === "edit" ? "Update" : "Create"}
                </Button>{" "}
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateDialog;

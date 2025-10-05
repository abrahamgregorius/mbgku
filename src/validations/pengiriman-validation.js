import { z } from "zod";

export const createPengirimanSchema = z.object({
  sekolahName: z
    .string()
    .min(1, "Sekolah name required")
    .max(50, "Sekolah name must be 50 characters or less"),
  quantity: z.coerce
    .number("Quantity harus berupa angka")
    .int(1, "Value must be a number")
    .nonnegative("Value cannot be negative"),
  sku: z
    .string()
    .min(1, "SKU is required")
    .max(30, "Terlalu Panjang")
    .regex(/^[a-zA-Z0-9-_]+$/, "SKU must be alphanumeric"),
  supplier: z
    .string()
    .min(1, "Supplier is required")
    .max(100, "Supplier name must be 100 characters or less"),
  status: z.string().min(1, "Please input status"),
});

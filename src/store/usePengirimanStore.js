import { create } from "zustand";

export const usePengirimanStore = create((set) => ({
  // --- STATE ---
  items: [],
  selectedItem: null,
  isDialogOpen: false,
  mode: "create",

  // --- MODAL CONTROL ---
  openDialog: (mode, item = null) => {
    set({
      mode,
      isDialogOpen: true,
      selectedItem: item, // null = create mode
    });
  },

  closeDialog: () => {
    set({
      isDialogOpen: false,
      selectedShipment: null,
    });
  },

  //  -- CRUD FUNC --
  fetchData: async () => {
    console.log("Fetching data...");
    // nanti ganti dengan listen realtime dari firebaseCollection
    const dummyData = [
      {
        id: 1,
        sekolahName: "SMA Harapan",
        supplier: "PT Beras Makmur",
        status: "pending",
        sku: "BR001",
        quantity: 50,
      },
      {
        id: 2,
        sekolahName: "SMP Sejahtera",
        supplier: "CV Padi Nusantara",
        status: "delivered",
        sku: "BR002",
        quantity: 80,
      },
      {
        id: 3,
        sekolahName: "Binus",
        supplier: "CV Padi Nusantara",
        status: "canceled",
        sku: "BR003",
        quantity: 80,
      },
    ];
    set({ items: dummyData });
  },
  // 4️⃣ Create data baru
  createData: async (newData) => {
    console.log("Creating shipment:", newData);
    // nanti tambahkan ke Firestore, lalu fetch ulang
  },

  // 5️⃣ Update data
  updateData: async (id, updatedData) => {
    console.log("Updating shipment:", id, updatedData);
  },

  // 6️⃣ Delete data
  deleteData: async (id) => {
    console.log("Deleting shipment:", id);
  },
}));

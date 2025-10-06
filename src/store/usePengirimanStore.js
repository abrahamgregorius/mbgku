import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { create } from "zustand";
import { db } from "../lib/firebase";

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
  fetchData: () => {
    const collectionRef = collection(db, "pengiriman");
    const q = query(collectionRef, orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));

      set({ items: data });
    });
    return unsub;
  },
  // 4️⃣ Create data baru
  createData: async (newData) => {
    try {
      const data = {
        ...newData,
        createdAt: serverTimestamp(),
      };
      console.log(data);
      await addDoc(collection(db, "pengiriman"), data);
    } catch (error) {
      console.error(error);
    }
  },

  // 5️⃣ Update data
  updateData: async (id, updatedData) => {
    try {
      await updateDoc(doc(db, "pengiriman", id), updatedData);
    } catch (error) {
      console.error(error);
    }
  },

  // 6️⃣ Delete data
  deleteData: async (id) => {
    try {
      await deleteDoc(doc(db, "pengiriman", id));
    } catch (error) {
      console.error(error);
    }
  },
}));

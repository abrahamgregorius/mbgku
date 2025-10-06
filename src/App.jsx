import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/kantin/Dashboard";
import Pengiriman from "./components/pages/kantin/Pengiriman";
import { usePengirimanStore } from "./store/usePengirimanStore";
import { useEffect } from "react";

function App() {
  const { fetchData } = usePengirimanStore();
  useEffect(() => {
    const unsubscribeListener = fetchData();

    return () => {
      console.log("Matikan listener");
      unsubscribeListener();
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/pengiriman" element={<Pengiriman />}></Route>
      </Routes>
    </>
  );
}

export default App;

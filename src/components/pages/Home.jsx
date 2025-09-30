import { signOut } from "firebase/auth";
import { useAuth } from "../../context/auth/useAuth";
import { Button } from "../ui/button";
import { auth } from "../../lib/firebase";

export default function Home() {
  const { user, role, loading } = useAuth();
  console.log("Current Auth State:", user, role, loading);

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) {
    return <p>Memuat sesi user...</p>;
  }

  if (!user) {
    return <h1>Anda belum login. Silakan daftar/masuk.</h1>;
  }

  return (
    <>
      <h1>
        Halo {user.email}, ini MBG-ku. Role Anda: {role}
      </h1>
      <Button onClick={logout}>Logout</Button>
    </>
  );
}

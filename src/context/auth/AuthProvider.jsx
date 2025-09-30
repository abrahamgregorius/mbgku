import { useEffect, useState } from "react";
import { auth, db } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { AuthContext } from "./useAuth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser) {
          setUser(currentUser);
          const userRef = doc(db, "users", currentUser.uid);
          const getUser = await getDoc(userRef);
          if (getUser.exists()) {
            setRole(getUser.data().role);
          } else {
            setRole("unassigned");
          }
        } else {
          setUser(null);
          setRole(null);
        }
      } catch (error) {
        console.log(error);
        setUser(null);
        setRole(null);
      } finally {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const value = {
    user,
    role,
    loading,
  };
  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <p>Loading bang</p>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

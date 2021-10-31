import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import initializeAuthentication from "../components/login/firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {

  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
      .finally(() => { setIsLoading(false) });
  }

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUsers({})
        console.log(users)
      })
      .finally(() => setIsLoading(false))
  }

  //user auth state changed or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      }
      else {
        setUsers({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [])

  return {
    users,
    isLoading,
    signInUsingGoogle,
    logOut
  }


}
export default useFirebase;
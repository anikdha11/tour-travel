import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import initializeAuthentication from "../components/login/firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {

  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState('');

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

  const handleNameChanged = e => {
    setName(e.target.value)
  }

  const handleRegistration = e => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError('Password Must be at least 6 chartar')
      return;
    }
    // isLogin ?proscessLogin(email,password) :creatNewUser(email,password);
    if (isLogin) {
      proscessLogin(email, password);
    }
    else {
      registerNewUser(email, password);
    }
  }
  const proscessLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
  }
  const toggoleLogin = e => {
    setIsLogin(e.target.checked)
  }
  const handleEmailChanged = e => {
    setEmail(e.target.value);
  }
  const handlePassword = e => {
    setPassword(e.target.value);
  }
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => { })
  }

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        verifyEmail();
        setUserName()
      })
      .catch(error => {
        setError(error.message);
      })
  }
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result)
      })
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
    error,
    isLoading,
    isLogin,
    signInUsingGoogle,
    logOut,
    handleNameChanged,
    handlePassword,
    handleRegistration,
    toggoleLogin,
    handleEmailChanged,
    proscessLogin
  }


}
export default useFirebase;
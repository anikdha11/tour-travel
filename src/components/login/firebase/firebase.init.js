import { initializeApp } from "firebase/app";
import firebaseConfig from "./firbase.confiqe";

const initializeAuthentication = () =>{
  initializeApp(firebaseConfig);
}
export default initializeAuthentication;
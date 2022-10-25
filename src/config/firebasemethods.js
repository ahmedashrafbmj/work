import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebaseconfig";


const auth = getAuth(app);

let signUpUser = (email,password)=>{
   return createUserWithEmailAndPassword(auth, email, password)
 
}

export {signUpUser};
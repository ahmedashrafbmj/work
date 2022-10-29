import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebaseconfig";
import { getDatabase, ref, set } from 'firebase/database';


const auth = getAuth(app);
const database = getDatabase(app)


let signUpUser = (obj) => {
   let { email, password, userName, contact } = obj
   return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password)
         .then((UserCredential) => {
            const user = UserCredential.user;
            const reference = ref(database, `users/${user.uid}`)

            set(reference, obj)
               .then(() => {
                  resolve("user created successfully")
               })
               .catch((errr) => {
                  reject(errr)
               })
         })
         .catch((err) => {
            reject(err)

         })

   })
};


let loginUser = (obj)=>{

}

export { signUpUser,loginUser };
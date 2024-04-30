import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBDP1SiegMW6Z3qSIc2Q1aybjbICGymkFI",
  authDomain: "netflix-clone-8e5a4.firebaseapp.com",
  projectId: "netflix-clone-8e5a4",
  storageBucket: "netflix-clone-8e5a4.appspot.com",
  messagingSenderId: "926775803718",
  appId: "1:926775803718:web:e85d845a86018cdcab6f47"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user;
    await addDoc(collection(db, 'user'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    })
  } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
}

const logout = () => {
  signOut(auth);
}

export { auth, db, login, signup, logout }
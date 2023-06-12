import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCsi1mQtCJ4p8Vo795uruFX_nuephxmJuQ",
  authDomain: "but-first-me.firebaseapp.com",
  projectId: "but-first-me",
  storageBucket: "but-first-me.appspot.com",
  messagingSenderId: "778086605951",
  appId: "1:778086605951:web:ba6e9076871df624e1cb4a",

};


const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAUth = async (userAuth) =>{
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);


  const userSnapshot = getDoc(userDocRef);
  console.log(userSnapshot);
  console.log((await userSnapshot).exists());
}
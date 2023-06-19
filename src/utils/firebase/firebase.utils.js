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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAUth = async (userAuth) =>{
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);


  const userSnapshot = getDoc(userDocRef);
  console.log(userSnapshot);
  console.log((await userSnapshot).exists());

  if (!(await userSnapshot).exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
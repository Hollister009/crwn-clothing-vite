import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Web App Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBGxzipqVM9YmPin6VIcz4CpslRJHtiyxU',
  authDomain: 'crwn-db-e05ff.firebaseapp.com',
  databaseURL: 'https://crwn-db-e05ff.firebaseio.com',
  projectId: 'crwn-db-e05ff',
  storageBucket: 'crwn-db-e05ff.appspot.com',
  messagingSenderId: '67909430512',
  appId: '1:67909430512:web:a08ede9da8d0711e932635',
  measurementId: 'G-XQFJ5G211X',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.error('Error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  const result = await createUserWithEmailAndPassword(auth, email, password);

  // eslint-disable-next-line consistent-return
  return result;
};

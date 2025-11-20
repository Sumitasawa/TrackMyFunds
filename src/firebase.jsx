// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// ✅ Correct Firebase config (from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDvqQQ8Ej2UMlv6fXi4YJvzVVCp8D6GfDM",
  authDomain: "trackmyfunds-10d1b.firebaseapp.com",
  projectId: "trackmyfunds-10d1b",
  storageBucket: "trackmyfunds-10d1b.appspot.com", // ✅ FIXED
  messagingSenderId: "370460963649",
  appId: "1:370460963649:web:9f0b7c921e41ae8e2ca7c0",
  measurementId: "G-24LJQNRY2C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export for app use
export { db, auth, provider, doc, setDoc, analytics };

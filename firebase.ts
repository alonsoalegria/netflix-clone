// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgYxozVax-WAuZ22u0_V8Hi7nKN0yN2QM",
    authDomain: "netflix-clone-82b76.firebaseapp.com",
    projectId: "netflix-clone-82b76",
    storageBucket: "netflix-clone-82b76.appspot.com",
    messagingSenderId: "610849975343",
    appId: "1:610849975343:web:fe2e61faadbdb434fceada"
  }

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
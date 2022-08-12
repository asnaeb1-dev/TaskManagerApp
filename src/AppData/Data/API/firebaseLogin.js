import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth'
import { getDocs, collection, getFirestore, addDoc } from 'firebase/firestore'
//firebaseConfig
const firebaseConfig = {
    apiKey: "AIzaSyBIssmxOtQIRq59opgep7hKbOFQdqYp2NA",
    authDomain: "taskmanager-f829e.firebaseapp.com",
    projectId: "taskmanager-f829e",
    storageBucket: "taskmanager-f829e.appspot.com",
    messagingSenderId: "355625676933",
    appId: "1:355625676933:web:9f4df039d7e2450c0639ec"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth();

const createUserAccount = async (email, password) => {
    const auth = getAuth()
    try{
        const response = await createUserWithEmailAndPassword(auth, email, password)
        const user = response.user;
        return {
            error: false,
            obj: user
        }
    }catch(e){
        return {
            error: true,
            obj: e
        }
    }
}

//Login user
const loginUser = async (email, password) => {
    try{
        const user = await signInWithEmailAndPassword(auth, email, password);
        return {error: false, response: user}
    }catch(e){
        return{
            error: true,
            response: e
        }
    }
}
//get the current user which is logged in
const getCurrentUser = () => {
    return auth.currentUser;
}

const saveUserToDB = async(userData) => {
    const users = collection(db, "users")
    try{
        const response = await addDoc(users, userData);
        return(
            {error: false,
            response}
        )
    }catch(e){
        return{
            error: true,
            response: e
        }
    }    
}


export { createUserAccount, loginUser, saveUserToDB, getCurrentUser }


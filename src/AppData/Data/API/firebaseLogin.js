import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth'

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
    const auth = getAuth();
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
const getCurrentUser = async() => {
    

}

const saveUserToDB = async() => {
    
}


export { createUserAccount, loginUser, saveUserToDB }


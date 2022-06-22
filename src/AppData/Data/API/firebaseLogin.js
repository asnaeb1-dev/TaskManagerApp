import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'

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


export { createUserAccount }


import { ref } from "@vue/reactivity";
import { porjectAuthentication } from '../firebase/config'
const error = ref( null)
const login = async ( email, password ) => {
    error.value =  null
    try{
        const response = await porjectAuthentication.signInWithEmailAndPassword( email, password )
        if(!response){
            throw new Error ( 'Invalid login')
        }
        return response
    } catch( err){
        error.value = err.message 
    }
}

const useLogin = () => {
    return { error, login }
}

export default useLogin
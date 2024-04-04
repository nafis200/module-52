import { createContext, useState } from "react";
import auth from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null)

const Authprovider = ({children}) => {

    const [user,setUser] = useState(null)
    
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo = {createUser,user}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;
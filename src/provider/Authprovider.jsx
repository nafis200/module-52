import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext(null)

const Authprovider = ({children}) => {

    const [user,setUser] = useState(null)
    
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth,(currentUser)=>{
             console.log('user in the changed',currentUser);
             setUser(currentUser)
         })
         return () =>{
            unSubscribe()
         }
    })
    const authInfo = {createUser,user,logOut,signIn}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;
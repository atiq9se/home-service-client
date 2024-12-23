import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "../../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const singInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }

    }, [])

    const authInfo={
         user,
         loading,
         createUser,
         signInUser,
         singInWithGoogle,
         signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
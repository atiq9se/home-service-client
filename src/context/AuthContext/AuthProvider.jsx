import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "../../firebase/firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";


const googleProvider = new GoogleAuthProvider();

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

    const signInWithGoogle = ()=>{
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

            if(currentUser?.email){
                const user = {email: currentUser.email}

                axios.post('https://y-blond-theta.vercel.app/jwt', user, {withCredentials:true})
                .then(res=>{
                    setLoading(false);
                })
            }
            else{
                axios.post('https://y-blond-theta.vercel.app/logout', {}, {withCredentials:true})
                .then(res => {  
                        setLoading(false);
                    })
            }


            
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
         signInWithGoogle,
         signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
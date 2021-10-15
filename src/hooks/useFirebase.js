import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase=()=>{
    const [user,setUsers]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const auth = getAuth();
    
    const signInUsingGoogle =()=>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUsers(result.user)
        })
        .finally(()=>setIsLoading(false));
    }
    const logOut =()=>{
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUsers({})
          })
          .finally(()=>setIsLoading(false));
    }
    useEffect(()=>{
      const unsubscribed=   onAuthStateChanged(auth, (user) => {
            if (user) {
             setUsers(user)
            } else {
            setUsers({})
            }
            setIsLoading(false)
          });
          return ()=>unsubscribed;
          
    },[])
  
    return{
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;
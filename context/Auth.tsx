import {FC, createContext, useEffect, useState, useContext} from "react";
import {User} from "@firebase/auth-types"
import firebase,{auth} from "../utils/Firebase";

type AuthContextProps ={
    currentUser: User |null;
    login?: ()=>Promise<void>;
    logout?: ()=>Promise<void>;
}
const AuthContext =createContext<AuthContextProps>({currentUser:null})

export const useAuth =()=>{
    return useContext(AuthContext)
}

type Props ={
    children?: JSX.Element;
}


const AuthProvider: FC =({children}):JSX.Element =>{
    const [currentUser,setCurrentUser]=useState<User|null>(null);
    const [isLoading,setIsLoading] =useState(true)

    const login =()=>{
        const provider =new firebase.auth.GoogleAuthProvider();
        return auth.signInWithRedirect(provider)
    };

    const logout =()=>{
        return auth.signOut();
    }

    useEffect(()=>{
        return auth.onAuthStateChanged((user:User|null)=>{
            setCurrentUser(user);
            setIsLoading(false);
        })
    },[]);

    const value:AuthContexType ={
        currentUser,
        login,
        logout
    }

    return (
            <AuthContext.Provider
            value={value}>
                {isLoading ? <p>マムシパイル中</p>:children}
            </AuthContext.Provider>
    )
}

export {AuthProvider}


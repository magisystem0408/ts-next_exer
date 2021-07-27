import {FC,useEffect,useContext} from "react";
import Router from "next/router";
import firebase from "../utils/Firebase";


const SignIn: FC =()=>{
    const {currentUser} =useContext(AuthContext)

    useEffect(()=>{
        currentUser && Router.push('/blog')
    },[currentUser])

    const login =()=>{
        const provider =new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    }

    return(
        <div className="container">
            <button onClick={login}>googleアカウントでログインする</button>
        </div>
    )
}
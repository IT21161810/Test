import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from './firebase'

const AuthDetails = () => {

const [authuser,setAuthUser] = useState(null);

useEffect(() => {
   
    const listen = onAuthStateChanged(auth, (user) => {
        if(user){
           
            setAuthUser(user);
        }else{

            setAuthUser(null);
        }
    });

    return () => {
        listen();
    }
    
},[]);

const userSignOut = () => {
    signOut(auth)
    .then(() => {
        console.log("Sign Out is Successfull")
    })
    .catch((err) => console.log(err))
}

  return (
    <div>
      {authuser ? <><p>{`Signin as ${authuser.email}`}</p><button onClick={userSignOut}>Sign out</button></> :<p>Sign Up</p>}
    </div>
  )
}

export default AuthDetails

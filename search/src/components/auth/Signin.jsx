import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { auth } from '../firebase';

const Signin = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const Signin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <div className='signin'>
      <form onSubmit={Signin}>
        <h2>Log In</h2>
        <input type ="email" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value) }  value={email}/>
        <input type ="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}  value={password} />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Signin

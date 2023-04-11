import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { auth } from '../firebase';

const Signup = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <div className='signin'>
      <form onSubmit={signup}>
        <h2>Create an account</h2>
        <input type ="email" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value) }  value={email}/>
        <input type ="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}  value={password} />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup

import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router';
import { registerUser } from '../action/UserAction';

export function SignUp(){
const[userName,setUser] = useState('');
const[userEmail,setEmail] = useState('');
const[userPassword,setPassword] = useState('');
const dispatch = useDispatch();
// const navigate=useNavigate()
function handleCurrentData(e){
    setUser(e.target.value);
}

function handleCurrentEmail(e){
    setEmail(e.target.value);
}

function handleCurrentPassword(e){
    setPassword(e.target.value);
}

function submit1(e){
    e.preventDefault()
    const username= userName;
    const email= userEmail;
    const password= userPassword;
    dispatch(registerUser({username,email,password}))
    console.log("ooooooppppppp");
    // navigate('/myCart')
}



    return(
        <div>
        <h1 id="heading">Sign Up</h1>
        <div>
          <form className="form1">
            <label className="email1" htmlFor="email">Username</label><br /><br />
            <input type="text" id="email" value={userName} onChange={handleCurrentData} name="email" placeholder="Enter email" required /><br /><br />
            
            <label className="email1" htmlFor="email">Email</label><br /><br />
            <input type="email" id="email" value={userEmail} onChange={handleCurrentEmail} name="email" placeholder="Enter email" required /><br /><br />
            
            <label className="email1"  htmlFor="password">Password</label><br /><br />
            <input type="password" id="email" value={userPassword} onChange={handleCurrentPassword} name="password" placeholder="Enter password" required /><br /><br />
            
            <input type="checkbox" name="Remember" defaultValue="Remember me" defaultChecked />
            
            <label className="email1" htmlFor="Remember">Remember me</label><br /><br />
            
            <input className="signin" onClick={submit1} type="submit" defaultValue="Sign in" />
            <p>Forgot <a href="#">Password ?</a></p>
          </form>
        </div>
      </div>
    )
}
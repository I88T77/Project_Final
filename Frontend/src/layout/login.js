import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { createUser } from '../action/UserAction';
// import swal from 'sweetalert';
// import { fetchCart } from '../action/CartAction';
// import { useSelector } from 'react-redux'
import './login.css';
export function Login() {
  const [userName, setUser] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  // const userId = useSelector(state => state.UserReducer.id)
  // const token = useSelector(state => state.UserReducer.token)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSuccess = () => {
    
  }
  const onFailure = () => {}

  function handleCurrentData(e) {
    setUser(e.target.value);
  }

  function handleCurrentEmail(e) {
    setEmail(e.target.value);
  }

  function handleCurrentPassword(e) {
    setPassword(e.target.value);
  }

  function submit1(e) {
    console.log("elknfklenflkefnlkflkekllllll");
    e.preventDefault()
    const username = userName;
    const email = userEmail;
    const Password = userPassword;
    dispatch(createUser({ username, email, Password }, onSuccess, onFailure))
    navigate("/Laptop")
  }



  return (
    <div>
      <h1 id="heading">Log in</h1>
      <div>
        <form className="form1">
          <label className="email1" htmlFor="email">Username</label><br /><br />
          <input type="text" id="email" value={userName} onChange={handleCurrentData} name="email" placeholder="Enter email" required /><br /><br />

          <label className="email1" htmlFor="email">Email</label><br /><br />
          <input type="email" id="email" value={userEmail} onChange={handleCurrentEmail} name="email" placeholder="Enter email" required /><br /><br />

          <label className="email1" htmlFor="password">Password</label><br /><br />
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
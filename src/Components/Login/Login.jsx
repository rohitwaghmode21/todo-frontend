import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginForm = async(e) => {
    e.preventDefault();
    const loginData = {
      email : email, password : password, confirmPassword : confirmPassword
    }

    const config = {headers : {"Content-Type" : "application/json"}}

    const response = await axios.post("http://localhost:8080/api/v1/login", 
                                      {email : email, password : password, confirmPassword : confirmPassword}, config);
    if(response.data.status === "Failed"){
      alert("Please fill the Login details carefully....")
    }else{
      navigate("/todo")
    }
  }

  return (
    <div>
      <form onSubmit={handleLoginForm}>
        <div>
          <label>Email</label>
          <input type="text" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label>Password</label>
          <input type="text" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="text" value = {confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value)}/>
        </div>
        <div>
          <button type = 'submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login

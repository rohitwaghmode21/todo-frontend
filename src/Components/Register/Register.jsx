import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleForm = async(e) => {
        e.preventDefault();
        const DATA = {
            email : email, password : password
        }
        const config = {headers : {"Content-Type" : "application/json"}}

        const resp = await axios.post("http://localhost:8080/api/v1/register", {email : email, password : password}, config);
        if(resp.data.status === "Failed"){
            alert("something went wrong")
        }else{
            navigate("/")
        }
    }

  return (
    <div>
      <form onSubmit = {handleForm}>
        <div>
            <label>Email</label>
            <input type="text" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
        </div>
        <div>
            <label>Password</label>
            <input type="text" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
        </div>
        <div>
            <button type = 'submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Register

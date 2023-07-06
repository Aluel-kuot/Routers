import React,{useState} from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import './style.css'

const LogIn=()=>{
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    console.log({username});
    console.log({password})


    const handleSubmit=async(e)=>{
        e.preventDefault();

        const data =  {
            username:username,
            password:password
        }
try {
const response =await fetch('https://dummyjson.com/auth/login', {
     method:'POST',
     headers:{
    'Content-Type':'application/json'
},
body:JSON.stringify(data),
    });
    const result=await response.json();
    console.log({result});
    if (response.succesfull) {
      }

    }catch (error){
        console.log(error.message)
    }
    }
    return(
        <div>
<form className="form"  onSubmit={handleSubmit
}>
    <h1>Login</h1>
    <input placeholder="Enter User name" type="text"
    onChange={(e)=>{setUsername(e.target.value)}}
    />
    <br/>
    <br/>
    <input placeholder="Enter User Password" type="Password"
        onChange={(e)=>{setPassword(e.target.value)}}
    />
    <br/>
    <br/>
    <Link to={'/Products'}>
        <button type="submit">Login
        </button>
    </Link>
</form>
        </div>
    )
}
export default LogIn;
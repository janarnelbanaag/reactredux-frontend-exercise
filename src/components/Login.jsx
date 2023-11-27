import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "../api/axios";
import List from "./List";

export default function Login (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleAdd = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/addnew",
            {
                "email": email,
                "password": password,
            });
            setName("")
            setEmail("")
            setPassword("")
            navigate('/')
        }catch(e){
            console.log(e)
        }
    }

    return (
        <div className="m-2">
            <h1 className="text-3xl font-bold">Login Page</h1>
            <form>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" className="bg-slate-200 rounded my-px" value={email} onChange={e => setEmail(e.target.value)}/> <br />
                <label htmlFor="password">Password: </label>
                <input type="text" name="password" id="password" className="bg-slate-200 rounded my-px" value={password} onChange={e => setPassword(e.target.value)}/> <br />
                <button type="submit" className="bg-slate-600 text-white ml-10 px-1 rounded mr-2" onClick={handleAdd}>Login</button>

                <Link to="/register" className="underline">Register</Link>
            </form>
        </div>
    )
}
  
  
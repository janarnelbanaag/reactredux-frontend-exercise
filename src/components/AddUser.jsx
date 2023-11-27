import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "../api/axios";
import List from "./List";

export default function Login (){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleAdd = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/addnew",
            {
                "name": name,
                "email": email,
                "password": password,
            });
            setName("")
            setEmail("")
            setPassword("")
            refreshPage()
            navigate('/')
        }catch(e){
            console.log(e)
        }
    }

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className="m-2">
            <h1 className="text-3xl font-bold">Add New User</h1>
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" className="bg-slate-200 rounded my-px" value={name} onChange={e => setName(e.target.value)}/> <br />
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" className="bg-slate-200 rounded my-px" value={email} onChange={e => setEmail(e.target.value)}/> <br />
                <label htmlFor="password">Password: </label>
                <input type="text" name="password" id="password" className="bg-slate-200 rounded my-px" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit" className="bg-slate-600 text-white ml-2 px-1 rounded mr-2" onClick={handleAdd}>Add</button>
            </form>

            <List />
        
        </div>
    )
}
  
  
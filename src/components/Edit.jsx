import React, { useState, useEffect } from "react"
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Edit (){

    const {id} = useParams()
    const navigate = useNavigate()
    const [user, setUser] = useState([])

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        fetchUser(id);
    }, [id])

    const fetchUser = async (id) => {
        try {
            const result = await axios.get("http://127.0.0.1:8000/api/users/"+id)
            setUser(result.data.users);
            console.log(result.data.users);
        } catch (err) {
            console.log(err);
        }
    }

    const handleEdit = async (event) => {
        event.preventDefault()
        try {
            await axios.put("http://127.0.0.1:8000/api/usersupdate/"+id, {
                "name": "try",
                "email": `${email}`,
                "password": `${password}`
            })
            setEmail("")
            setPassword("")
            navigate("/view/"+id)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div >
            <h3>User Details</h3>
            <h2>ID: {user.id} </h2>
            <h2>Full Name: {user.name}</h2>
            <h2>Email: {user.email} {email && `=> ${email}`}</h2>
            <h2>Password: {user.password} {password && `=> ${password}`}</h2>

            <br /><br />
            
            <form>
                <label htmlFor="email">Email: </label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="bg-slate-200"/> <br />
                <label htmlFor="password">Password: </label>
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="bg-slate-200"/> <br />
                <button type="submit" className="bg-slate-600 text-white w-100 border-2 border-black ml-1" onClick={handleEdit}>Update</button>
            </form>
        </div>
    )
}
  
  
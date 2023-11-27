import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function View(){

    const {id} = useParams()
    const [user, setUser] = useState([])

    useEffect(()=>{
        fetchUser(id);
    },[id])

    const fetchUser=async(id)=>{
        try{
            const result = await axios.get("http://127.0.0.1:8000/api/users/"+id)
            setUser(result.data.users)
            console.log(result.data.users)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <h1>User Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
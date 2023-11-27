import React, { useState, useEffect } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";

export default function List (){

    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/users")
            console.log(result.data.results);
            setUserData(result.data.results);
        } catch (err) {
            console.log("something wrong");
        }
    }

    const handleDelete = async (id) => {
        console.log(id)
        try{
            await axios.delete("http://127.0.0.1:8000/api/usersdelete/"+id)
            const newUserData=userData.filter((item)=>{
                return(
                    item.id !== id
                )
            })
            setUserData(newUserData)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div >
            <h3 className="text-3xl font-bold mt-5">User Details</h3>
            <table className="w-full text-center border">
                <thead className="border">
                    <tr className="border">
                        <th className="border">S. No</th>
                        <th className="border">Full Name</th>
                        <th className="border">Email</th>
                        <th className="border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user, i) => {
                            return (
                                <tr key={i} className="border">
                                    <td className="border">{user.id}</td>
                                    <td className="border">{user.name}</td>
                                    <td className="border">{user.email}</td>
                                    <td className="border">
                                        <Link to={`./view/${user.id}`} className="underline text-blue-600">View</Link>{` `}
                                        <Link to={`./edit/${user.id}`} className="underline text-blue-600">Edit</Link>{` `}
                                        <button onClick={()=>handleDelete(user.id) } className="underline text-red-600">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
  
  
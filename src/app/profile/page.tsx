'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import React from "react"
import { toast } from "react-hot-toast"


export default function ProfilePage() {

    const router = useRouter()

    const [data, setData] = React.useState("")

    const onLogOut = async () => {
        try {
            await axios.get("/api/users/logOut")
            console.log("Log out successful")
            toast.success("Successfully logged out")
            router.push("/login")
        } catch (error: any) {
            console.log(error.message)
        }
    }

    const getUserDetails = async () => {
        const response = await axios.get("/api/users/userDetails")
        console.log(response.data.data._id)
        setData(response.data.data._id)
    }

    return (
        <div>
            <h1 className="text-center text-4xl">This is Profile Page</h1>
            {data && <p className="p-3 bg-purple-500 font-bold text-white rounded-xl w-fit mx-auto mt-5 mb-5">{data}</p>}
            <div className="text-center">
                <button onClick={onLogOut} className="bg-red-600 hover:bg-red-800 ease-in-out duration-200 px-6 py-2 rounded-xl text-white font-semibold">Log Out</button>
                <div className="mt-5">
                    <button onClick={getUserDetails} className="bg-green-600 hover:bg-green-800 ease-in-out duration-200 px-6 py-2 rounded-xl text-white font-semibold">Get User Details</button>
                </div>
            </div>
        </div>
    )
}
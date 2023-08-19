'use client'

import axios from "axios"
import { useRouter } from "next/navigation"


export default function ProfilePage() {

    const router = useRouter()

    const onLogOut = async () => {
        try {
            await axios.get("/api/users/logOut")
            console.log("Log out successful")
            router.push("/login")
        } catch (error: any) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <h1 className="text-center text-4xl">This is Profile Page</h1>
            <div className="text-center">
                <button onClick={onLogOut} className="bg-red-600 hover:bg-red-800 ease-in-out duration-200 px-6 py-2 rounded-xl text-white font-semibold">Log Out</button>
            </div>
        </div>
    )
}
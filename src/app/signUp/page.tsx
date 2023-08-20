'use client'

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";

export default function SignUpPage() {

    const router = useRouter()

    const [loading, setLoading] = React.useState(false)

    const [user, setUser] = React.useState({
        userName: '',
        email: '',
        password: ''
    })

    const onSignUp = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/users/signUp", user);
            console.log("Sign up success", response.data)
            toast.success("Successfully created an account")
            router.push("/login")
        } catch (error: any) {
            console.log(error.message)
            toast.error(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-9/12 mx-auto mt-20">
            <h1 className="text-4xl text-center font-semibold">{loading ? 'Processing...' : 'Sign Up'}</h1>
            <div className="relative z-0 w-full mb-6 group">
                <input
                    value={user.userName}
                    onChange={(event) => setUser({ ...user, userName: event.target.value })}
                    type="text" name="userName" id="floating_userName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_userName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Username</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input
                    value={user.email}
                    onChange={(event) => setUser({ ...user, email: event.target.value })}
                    type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input
                    value={user.password}
                    onChange={(event) => setUser({ ...user, password: event.target.value })}
                    type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <div className="w-fit hover:underline mb-5">
                <Link href='/login'><p>Already have an account?</p></Link>
            </div>
            <button onClick={onSignUp} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
        </div>
    )
}
import React from "react"

export default function LoginPage() {

    const [user, setUser] = React.useState({
        email: '',
        password: ''
    })

    return <div>
        <h1 className="text-center text-4xl">This is Login Page</h1>
    </div>
}
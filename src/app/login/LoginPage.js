
"use client"
import Image from "next/image"
import React, { useState } from "react"

import loginSVG from '../assets/login_page.svg'
const LoginPage = () => {
    const [loginUser, setLoginUser] = useState({
        email: "",
        password: "",
    })
    const handleLOgin = (event) => {
        event.preventDefault()
    }
    const resetForm = (event) => {
        event.preventDefault()
        setLoginUser({
            email: "",
            password: "",
        })

    }
    return (
        <div className="container grid grid-cols-12">
            <div className="col-span-6 col-start-4  p-5 mt-5 ">
                <div className=" py-5">
                    <div className="mt-2 flex justify-center">
                        <Image src={loginSVG} width={400} />
                    </div>
                    <h2 className="flex text-3xl items-center justify-center mt-2">Login</h2>
                    <form action="#!" onSubmit={handleLOgin}>

                        <div className="mt-4">
                            <label htmlFor="user_email" className="block text-sm font-medium mb-2 ">Email</label>
                            <input
                                type="email"
                                className="border-solid border-2 border-indigo-600 rounded-lg w-full p-1"
                                placeholder="Enter Your Email"
                                id="user_email"
                                name="user_email"
                                onChange={(event) => {
                                    setLoginUser({
                                        ...loginUser,
                                        email: event.target.value
                                    })
                                }}
                                value={loginUser.email}
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="user_password" className="block text-sm font-medium mb-2 ">Password</label>
                            <input
                                type="password"
                                className="border-solid border-2 border-indigo-600 rounded-lg w-full p-1"
                                placeholder="Enter Your Password"
                                id="user_password"
                                name="user_password"
                                onChange={(event) => {
                                    setLoginUser({
                                        ...loginUser,
                                        password: event.target.value
                                    })
                                }}
                                value={loginUser.password}
                            />
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button className="bg-green-600 py-2 px-3 rounded-lg hover:bg-blue-800">
                                Login
                            </button>
                            <button className="bg-orange-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3" onClick={resetForm}>Reset</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LoginPage

"use client"
import Image from "next/image";
import React, { useState } from "react";
import signUpSvg from "../assets/register.svg"
import { addUser } from "../services/userService";
import { toast } from "react-toastify";
const SignupPage = () => {
    const [regUser, setRegUser] = useState({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: ""
    })
    const handleRegister = async (event) => {
        event.preventDefault()
        try {
            const response = await addUser(regUser)
            toast.success(response.message, {
                position: "top-center"
            })
            setRegUser({
                name: "",
                email: "",
                password: "",
                about: "",
                profileURL: ""
            })
        }
        catch (error) {
            console.log(error);
            toast.error("Failed While Creating User")
        }
    }

    const resetForm = (event) => {
        event.preventDefault()
        setRegUser({
            name: "",
            email: "",
            password: "",
            about: "",
            profileURL: ""
        })
    }
    return (
        <div className="container grid grid-cols-12">
            <div className="col-span-6 col-start-4  p-5 mt-5 ">
                <div className=" py-5">
                    <div className="mt-2 flex justify-center">
                        <Image src={signUpSvg}
                            width={400}
                        />
                    </div>
                    <h2 className="flex text-3xl items-center justify-center mt-2">Signup</h2>
                    <form action="#!" onSubmit={handleRegister}>
                        <div className="mt-3">
                            <label htmlFor="user_name" className="block text-sm font-medium mb-2 ">User Name</label>
                            <input
                                type="text"
                                className="border-solid border-2 border-indigo-600 rounded-lg w-full p-1"
                                placeholder="Enter Your Name"
                                id="user_name"
                                name="user_name"
                                onChange={(event) => {
                                    setRegUser({
                                        ...regUser,
                                        name: event.target.value
                                    })
                                }}
                                value={regUser.name}
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="user_email" className="block text-sm font-medium mb-2 ">Email</label>
                            <input
                                type="email"
                                className="border-solid border-2 border-indigo-600 rounded-lg w-full p-1"
                                placeholder="Enter Your Email"
                                id="user_email"
                                name="user_email"
                                onChange={(event) => {
                                    setRegUser({
                                        ...regUser,
                                        email: event.target.value
                                    })
                                }}
                                value={regUser.email}
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
                                    setRegUser({
                                        ...regUser,
                                        password: event.target.value
                                    })
                                }}
                                value={regUser.password}
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="user_about" className="block text-sm font-medium mb-2 ">About</label>
                            <textarea
                                type="text"
                                className="border-solid border-2 border-indigo-600 rounded-lg w-full p-1"
                                placeholder="Enter Here"
                                rows={5}
                                id="user_about"
                                name="user_about"
                                onChange={(event) => {
                                    setRegUser({
                                        ...regUser,
                                        about: event.target.value
                                    })
                                }}
                                value={regUser.about}
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="user_profile" className="block text-sm font-medium mb-2 ">profileURL</label>
                            <input
                                type="text"
                                className="border-solid border-2 border-indigo-600 rounded-lg w-full p-1"
                                placeholder="Enter Your Profile Url"
                                id="user_profile"
                                name="user_profile"
                                onChange={(event) => {
                                    setRegUser({
                                        ...regUser,
                                        profileURL: event.target.value
                                    })
                                }}
                                value={regUser.profileURL}
                            />
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button className="bg-green-600 py-2 px-3 rounded-lg hover:bg-blue-800">
                                Register
                            </button>
                            <button className="bg-orange-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3" onClick={resetForm}>Reset</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupPage
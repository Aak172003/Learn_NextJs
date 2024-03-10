"use client"
import Link from "next/link";
import React from "react";

const CustomNavbar = () => {

    return (
        <div>
            <nav className="bg-blue-400 h-12 px-3 py-2 flex justify-between items-center">
                {
                    //     <h1 className="bg-blue-600 h-12 px-3 py-2">
                    //         This is Navbar Testing</h1>
                }
                <div className="branch text-3xl">
                    <h1><a href="#!">Work Manager</a></h1>
                </div>
                <div>
                    <ul className="flex space-x-5">
                        <li>
                            <Link className=" hover:text-blue-200 hover:underline" href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link className=" hover:text-blue-200 hover:underline" href={"/add-task"}>Add Task</Link>
                        </li>
                        <li>
                            <Link className=" hover:text-blue-200 hover:underline" href={"/show-task"}>Show Task</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="flex space-x-5">
                        <li>
                            <Link href={"/login"}>Login</Link>
                        </li>
                        <li>
                            <Link href={"/signup"}>Sign Up</Link>
                        </li>

                    </ul></div>
            </nav>
        </div>
    )
}

export default CustomNavbar
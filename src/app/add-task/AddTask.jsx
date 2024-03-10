
"use client"
import React, { useState } from "react";
import loginsvg from "../assets/login.svg"
import Image from "next/image";
import { addTask } from "../services/taskService";
import { toast } from "react-toastify";
const AdddTask = () => {
    const [task, setTask] = useState({
        title: "",
        content: "",
        status: "",
        userId: "65ec51a4f71b55cb062748d5"
    })

    const [loading, setLoading] = useState(false)
    const handleAddTask = async (event) => {
        event.preventDefault()
        setLoading(true)
        // Validate Task data
        try {
            const response = await addTask(task)
            toast.success(response.message, {
                position: "top-center"
            })

            setLoading(false)
            setTask({
                title: "",
                content: "",
                status: "",
                userId: "65ec51a4f71b55cb062748d5"
            })
        }
        catch (error) {
            console.log(error);
            toast.error("Failed While Creating Tasks")
            setLoading(false)
        }

    }
    return (
        <div className="grid grid-cols-12 justify-center">
            <div className=" col-span-6 col-start-4  p-5 mt-5">
                <div className="mt-2 flex justify-center">
                    <Image src={loginsvg} width={500} alt="login-image" />
                </div>
                <h1 className="text-3xl text-center mt-5">Add Your Task</h1>
                <form action="#!" onSubmit={handleAddTask}>
                    <div className="mt-4">
                        <label htmlFor="task_title" className="block text-sm font-medium mb-2 ">Title</label>
                        <input
                            type="text"
                            className="border-solid border-2 border-indigo-600 rounded-lg w-full p-1"
                            id="task_title"
                            name="task_title"
                            onChange={(event) => {
                                console.log(event.target.value);
                                setTask({
                                    ...task,
                                    title: event.target.value
                                })
                            }}
                            value={task.title}
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="task_content" className="block text-sm font-medium mb-2 ">Content</label>
                        <textarea
                            type="text"
                            className="border-solid border-2 border-indigo-600 rounded-lg w-full p-1"
                            id="task_content"
                            rows={5}
                            name="task_content"
                            onChange={(event) => {
                                setTask({
                                    ...task,
                                    content: event.target.value
                                })
                            }}
                            value={task.content}
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="task_status" className="block text-sm font-medium mb-2 ">Task Status</label>
                        <select id="task_status "
                            className="border-solid border-2 border-indigo-600 rounded-lg w-full p-1"
                            name="task_status"
                            onChange={(event) => {
                                setTask({
                                    ...task,
                                    status: event.target.value

                                })
                            }}
                            value={task.status}
                        >
                            <option value="" disabled>-- Select Status --</option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800">
                            {loading ? " Please Wait .." : "Add Task"}
                        </button>
                        <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3">Clear</button>
                    </div>
                </form>
            </div >
        </div >
    )

}
export default AdddTask
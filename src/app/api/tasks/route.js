import { Task } from "@/app/models/task";
import { getResponseMessage } from "@/helper/ApiResponse";
import { connectDB } from "@/helper/db";
import { NextResponse } from "next/server";


connectDB()
// get All Task
export async function GET(request) {
    try {
        const getTask = await Task.find()
        return getResponseMessage("Fetch All Tasks SuccessFully", 202, true, "Fetch Successfully", getTask)

        // return NextResponse.json({
        //     message: "Fetch All Tasks SuccessFully",
        //     Data: getTask
        // })
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to Fetch All Tasks"
        })
    }
}

// Create Task
export async function POST(request) {

    const { title, content, userId, status } = await request.json()
    try {
        const task = new Task({
            title,
            content,
            status,
            userId,
        })
        // Save the created task
        await task.save();

        return getResponseMessage("Task Created Successfully", 202, true, "Task create Successfully", task)

        // return NextResponse.json({
        //     success: true,
        //     message: "Task Created Successfully",
        //     task
        // })
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "failed to Create Task !!"
        }, { status: 403, statusText: "Error while adding Task" })
    }

}


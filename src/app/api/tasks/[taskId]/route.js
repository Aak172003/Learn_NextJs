import { Task } from "@/app/models/task";
import { getResponseMessage } from "@/helper/ApiResponse";

// Get Single Tasks
export async function GET(request, { params }) {
    const { taskId } = params
    try {
        const getSinglTask = await Task.findById(taskId)
        return getResponseMessage("Fetch Single Task Successfullly", 201, true, "successfully fetched single task", getSinglTask)
    }
    catch (error) {
        console.log(error);
        return getResponseMessage("Failed to fetch Single Task", 401, false, "failed while fetch single task")
    }
}

// Update Tasks
export async function PUT(request, { params }) {
    const { taskId } = params
    const data = await request.json()
    const { title, content, status } = data

    try {
        const updatedTask = await Task.findByIdAndUpdate(taskId,
            {
                title,
                content,
                status
            },
            { new: true }
        )
        await updatedTask.save()
        return getResponseMessage("Update Single Task Successfullly", 201, true, "successfully Update single task", updatedTask)
    }
    catch (error) {
        console.log(error);
        return getResponseMessage("Failed to Update Single Task", 401, false, "failed while Update single task")
    }
}

// Delete Tasks
export async function DELETE(request, { params }) {
    const { taskId } = params
    console.log(taskId);
    try {
        const deletedUser = await Task.findByIdAndDelete(taskId)
        return getResponseMessage("Delete Single Task Successfullly", 201, true, "successfully Delete single task", deletedUser)
    }
    catch (error) {
        console.log(error);
        return getResponseMessage("Failed to Delete Single Task", 401, false, "failed while Delete single task")
    }
}


import { Task } from "@/app/models/task";
import { User } from "@/app/models/user";
import { getResponseMessage } from "@/helper/ApiResponse";

// Get Taks Regarding Specific User
export async function GET(request, { params }) {
    const { userId } = params
    try {

        const user = await User.findById(userId)
        const allTask = await Task.find({ userId })
        const { name, email, about, profileURL } = user
        const returnData = {
            "Name": name,
            "Email": email,
            "About": about,
            "ProfileURL": profileURL,
            "His Task": allTask
        }
        return getResponseMessage("Fetch Task For Single User", 202, true, "Fetch Task For Single User", returnData)
    }
    catch (error) {
        console.log(error);
        return getResponseMessage("Failed to Fetch Task For Single User", 401, false, "failed while Fetching Task For Single User")
    }
}
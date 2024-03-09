
import { NextResponse } from "next/server"
import { connectDB } from "@/helper/db";
import { User } from "@/app/models/user";


connectDB()

// export function GET(request) {
//     const users = [
//         {
//             name: "Aakash",
//             phone: "93104",
//             course: "C++"
//         },
//         {
//             name: "Aman",
//             phone: "70115",
//             course: "Java"
//         },
//         {
//             name: "Sahu",
//             phone: "83028",
//             course: "Python"
//         },
//     ]
//     return NextResponse.json(users)
// }

export async function GET(request) {
    let getUser = []
    try {
        getUser = await User.find()
        return NextResponse.json({
            message: "Fetch All Users SuccessFully",
            Data: getUser
        })

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to Fetch All Users"
        })
    }
}

export function DELETE(request) {
    return NextResponse.json(
        {
            message: "Successfullt Deleted",
            status: true
        },
        { status: 201, statusText: "Status Text for Delete API At Users Route" }
    )
}

// Done by three Methods
// URI Variable
// Request.body
// Query Params 
export async function POST(request) {
    // fetch user Details from user request 

    const data = await request.json()
    const { name, email, password, about, profileURL } = data

    const existingUser = await User.findOne({ email })
    if (existingUser) {
        return NextResponse.json({
            message: "User Already exist",
            existingUser
        })
    }
    try {
        const user = new User({
            name,
            email,
            password,
            about,
            profileURL
        })
        await user.save()
        return NextResponse.json({
            success: true,
            message: "User Created Successfully",
            user
        })
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "failed to Create User"
        }, { status: 403, statusText: "Error while adding User" })
    }
}

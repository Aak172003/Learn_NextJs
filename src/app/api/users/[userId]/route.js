import { User } from "@/app/models/user";
import { NextResponse } from "next/server";

// Delete Api Via
// export function DELETE(request, { params }) {
//     const { userId } = params
//     return NextResponse.json(
//         {
//             message: "Testing Delete Via userId",
//         },
//         { status: 203, statusText: "User Deleted Successfully Via It's UserId" })
// }


export async function GET(request, { params }) {
    const { userId } = params

    try {
        const userFind = await User.findById(userId).select("-password")
        return NextResponse.json(userFind)
    }
    catch (error) {
        return NextResponse.json({
            message: "Failed while fetching Single User"
        }, { status: 401, statusText: "User Found Fail API" })
    }
}

// Delete User
export async function DELETE(request, { params }) {
    const { userId } = params
    try {
        await User.findByIdAndDelete(userId)
        return NextResponse.json(
            {
                success: true,
                message: "Testing Delete Via userId",
            },
            { status: 203, statusText: "User Deleted Successfully Via It's UserId" })
    }
    catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Failed While Deleteing User",
            },
            { status: 203, statusText: "Failed While Deleteing User Via It's UserId" })
    }
}

export async function PUT(request, { params }) {
    const { userId } = params;
    const { name, password, about, profileURL } = await request.json();
    try {

        // step - 1 find User
        const userFind = await User.findById(userId)

        if (!userFind) {
            return NextResponse.json(
                {
                    success: false,
                    message: "User not found"
                },
                { status: 404, statusText: "User not found" }
            );
        }

        // step - 2 Update details 

        userFind.name = name
        userFind.password = password
        userFind.about = about
        userFind.profileURL = profileURL

        // step - 3 save details 
        const updatedUser = await userFind.save();

        // OR 
        // const updatedUser = await User.findByIdAndUpdate(userId,
        //     {
        //         $set: {
        //             name: name,
        //             password: password,
        //             about: about,
        //             profileURL: profileURL
        //         }
        //     },
        //     { new: true }
        // )
        return NextResponse.json(
            {
                success: true,
                message: "Testing Delete Via userId",
                updatedUser: updatedUser
            },
            { status: 203, statusText: "User Updated Successfully Via It's UserId" })
    }
    catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Failed While Updating User",
            },
            { status: 500, statusText: "Failed While Updating User Via It's UserId" })
    }

}
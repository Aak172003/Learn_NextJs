import { NextResponse } from "next/server";

// Delete Api Via 
export function DELETE(request, { params }) {
    console.log(params);
    const { userId } = params
    console.log("This is User Id -> ", userId);

    console.log("Dynamic User Delete Api Called");
    return NextResponse.json(
        {
            message: "Testing Delete Via userId",
        },
        { status: 203, statusText: "User Deleted Successfully Via It's UserId" })
}
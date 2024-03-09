import { NextResponse } from "next/server";

// Post Api
export function GET(request, { params }) {

    console.log(params);
    const { userId, postId } = params
    return NextResponse.json(
        {
            message: "Todos Delete Api Called Via PostId and UserId",
            userId: userId,
            postId: postId
        },
        { status: 201, statusText: "Todo Deleted Successfully Via It's UserId and PostId" }
    )
}
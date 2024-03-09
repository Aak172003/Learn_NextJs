import { NextResponse } from "next/server"

export const getResponseMessage = (message, statusCode, successStatus, statusText, Data) => {
    return NextResponse.json(
        {
            message: message,
            success: successStatus,
            Data: Data
        },
        { status: statusCode, statusText: statusText }
    )
}
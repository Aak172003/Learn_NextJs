import { NextResponse } from "next/server";

export function GET(request) {
    return NextResponse.json(
        {
            message: "Works Api Called"
        },
        { status: 201, statusText: "Status Text for Get API At Works Route" }
    )
}
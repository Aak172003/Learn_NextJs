
import { NextResponse } from "next/server"
import { connectDB } from "@/helper/db";


connectDB()
export function GET(request) {
    const users = [
        {
            name: "Aakash",
            phone: "93104",
            course: "C++"
        },
        {
            name: "Aman",
            phone: "70115",
            course: "Java"
        },
        {
            name: "Sahu",
            phone: "83028",
            course: "Python"
        },
    ]
    return NextResponse.json(users)
}

export function DELETE(request) {
    console.log("Delete Api Called");
    return NextResponse.json({
        message: "Successfullt Deleted",
        status: true
    }, { status: 201, statusText: "Status Text for Delete API At Users Route" })
}

// Done by three Methods
// URI Variable
// Request.body
// Query Params 
export async function POST(request) {
    // const { name, age, email, phoneNo, degree } = request.body
    // console.log(request.body);

    // console.log("Methods ", request.method);
    // console.log("cookies ", request.cookies);
    // console.log("this is Header ", request.headers);

    // console.log("Path ", request.nextUrl.pathname);

    // this is how we get request data in json form
    const data = await request.json();
    console.log("this is data -> ", data);
    console.log(request.nextUrl.searchParams);
    return NextResponse.json({
        message: "Posting User Data Successfully",
        data: data
    })
}

export function PUT() {

}

export function PATCH() {

}

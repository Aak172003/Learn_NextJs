import { User } from "@/app/models/user"
import { getResponseMessage } from "@/helper/ApiResponse"
import { comparePassword } from "@/helper/authHelper"
import { connectDB } from "@/helper/db"

import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"
// Login

connectDB()


export async function POST(request) {
    const data = await request.json()
    const { email, password } = data

    if (!email || !password) {
        return getResponseMessage('Please fill all the data carefully ', 404, false, "Provide Valid Details")
    }

    try {
        const user = await User.findOne({ email: email })

        if (!user) {
            return getResponseMessage('Unauthorized User', 404, false, "Unauthorized Access")
        }

        const matchPassword = await comparePassword(password, user.password)
        if (!matchPassword) {
            return getResponseMessage('Password Incorrect', 404, false, "Password Incorrect")
        }

        // Create Token  -> while creating token , require JWT Secret key and Payload 
        // And here payload is only user id 
        const payLoad = { _id: user._id }

        // If i save into cookie , no need to send token again and again via user ,
        // But if i send token without cookie , so client make sure ki need to send token again and again from header
        const token = jwt.sign(payLoad, process.env.JWT_SECRET, { expiresIn: "1w", });

        // 4.Create Next Response and Tokens in Cookeies
        const response = NextResponse.json({
            message: "User Logged In Successfully",
            statusCode: 202,
            success: true,
            statusText: "Logged In Successfully",
            Data: user,
            token
        })

        const options = {
            httpOnly: true,
            secure: true
        }
        response.cookies.set("authToken", token, options)
        return response
    }
    catch (error) {
        console.log(error);
        return getResponseMessage('Failed While Login', 404, false, "Failed While Login")
    }

}
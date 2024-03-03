import mongoose from "mongoose";

const userschema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: [true, "Email is Required !! "]
    },
    password: {
        type: String,
        required: [true, "Password Required !! "]
    },
    about: {
        type: String
    },
    profileURL: String,
    address: {
        street: String,
        city: String,
        country: String,
        pinCode: String
    }
},
    {
        timestamps: true
    }
)

// But in mongoose User converted into pulular form -> users
export const User = mongoose.model.users || mongoose.model('User', userschema)
import mongoose from "mongoose";
import dotenv from 'dotenv';
// import { User } from "@/app/models/user";
dotenv.config();

const dbURL = process.env.DATABASE_URI;
export const connectDB = async () => {
    try {
        const connInstance = await mongoose.connect(dbURL, {
            // dbName 
            dbName: "first_db"
        });
        console.log(`Connected To MongoDB at ${connInstance.connection.host}`);

        // // Dummy Data
        // const user = new User({
        //     name: "Aakash",
        //     email: "abc@gmail.com",
        //     password: "93104@Aak",
        //     about: "Hello I am Aakash",
        //     address: "Raj Nagar Extension , Ghaziabad"
        // })

        // await user.save()

        // console.log("User is Created ------- Successfully ");
    }
    catch (error) {
        console.log(`Error in MongoDB is ${error}`);
        // this is used to exit the server if found any error while connecting to db 
        process.exit(1)
    }
};

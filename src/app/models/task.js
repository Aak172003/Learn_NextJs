import mongoose, { Schema } from "mongoose";

const states = ['pending', 'completed']
const taskSchema = Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        addedDate: {
            type: Date,
            default: Date.now()
        },
        status: {
            type: String,
            enum: states,
            default: 'pending'
        },
        userId: {
            // type: mongoose.Schema.Types.ObjectId,
            type: mongoose.ObjectId,
            // ref: "User",
            required: true
        }
    },
    { timestamps: true }
)

export const Task = mongoose.models.Task || mongoose.model('Task', taskSchema)
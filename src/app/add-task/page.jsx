import React from "react";
import AdddTask from "./AddTask";

// Export for Server Side Component
export const metadata = {
    title: "Add Task Manager"
}
const AdddTaskPage = () => {
    return (
        <AdddTask />
    )
}

export default AdddTaskPage

// async function takeTime() {
//     await new Promise((resolve) => {
//         setTimeout(resolve, 3000)
//     })
// }


async function ManualError() {
    await new Promise((resolve) => {
        setTimeout(resolve, 3000)

    })
}


export default async function about() {
    // await takeTime()

    await ManualError()
    // throw new Error("This is Manual Error.........");
    return (
        <div>
            <h1>This is About Route</h1>
        </div>
    )
}
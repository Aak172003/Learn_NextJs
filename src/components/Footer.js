"use client";
import React from "react";


const metadata = {
    title: "Footer Page",
};
const Footer = () => {
    return (
        <footer className="h-40 bg-blue-400 mt-2">
            <div className="flex p-5 justify-around">
                <div className=" text-center flex flex-col justify-center">
                    <h1 className="text-2xl">Welcome to Work Managaer </h1>
                    <p>LOREM Ispum</p>
                </div>
                <div>
                    <h1>Important Links</h1>

                    <ul className=" text-center">
                        <li><a className="#!">FaceBook</a></li>
                        <li><a className="#!">You Tube</a></li>
                        <li><a className="#!">Google</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
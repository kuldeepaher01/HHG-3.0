"use client";
import Image from "next/image";
import Sidebar from "./components/Sidebar";
import React from "react";


export default function Home() {

  return (
   
    <div className="flex ">
			<div className="flex flex-col items-center  w-1/2">
				<h1 className="text-3xl font-bold mb-4 text-white">Login</h1>
				<form
					// onSubmit={handleSubmit}
					className="flex flex-col items-center justify-center w-full"
				>
					{/* <input
						type="text"
						placeholder="Username"
						name="username"
						className="border-2 border-gray-300 rounded-md px-4 py-2 w-full mb-4"
						required
					/> */}
					<select
						name="username"
						className="border-2 border-gray-300 rounded-md px-4 py-2 w-full mb-4"
						required
					>
						<option value="">Select User</option>
						{/* {userOptions} */}
					</select>

					<input
						type="password"
						placeholder="Password"
						name="password"
						className="border-2 border-gray-300 rounded-md px-4 py-2 w-full mb-4"
						required
					/>

					<button
						type="submit"
						className={`bg-blue-500 text-white px-4 py-2 rounded-md w-full`}
						// disabled={loading}
					>
						Login
					</button>
				</form>
			</div>
                </div>
  );
}

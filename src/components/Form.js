import FormInput from "@/components/FormInput";
import { useState } from "react";

export default function Form() {
    const [text, setText] = useState("");





    return (
    <>
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      <div className="w-[500px] h-[350px] bg-white shadow-lg rounded-lg flex flex-col gap-5 px-12 pt-5">
        <h1 className="text-2xl font-bold py-2">New food</h1>
        <div className="flex flex-row gap-8 items-center">
          <label className="text-base font-medium">Name</label>
          <FormInput setText={setText}/>
          
        </div>

        <div className="flex flex-row gap-7 items-start">
        <label className="text-base font-medium">Recipe</label>
          <textarea className="border-2 border-gray-300 rounded-lg w-96 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" />
        </div>

        <div className="flex flex-row gap-8 items-center">
          <label className="text-base font-medium">Image</label>
          <input className="border-2 border-gray-300 rounded-lg w-96 h-8 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-3 py-1 rounded-lg text-base border-none">
        Add
     </button>
      </div>
    </div>
   </>
)
}
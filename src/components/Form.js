import Form1Input from "./Form1Input";
import Form2Input from "./Form2Input";
import Image from "./Image";
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
          <Form1Input setText={setText}/>
          
        </div>

        <div className="flex flex-row gap-7 items-start">
        <label className="text-base font-medium">Recipe</label>
          <Form2Input setText={setText}/>
        </div>

        <div className="flex flex-row gap-8 items-center">
          <label className="text-base font-medium">Image</label>
          <Image setText={setText}/>
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
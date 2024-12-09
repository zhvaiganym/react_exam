import FormInput from "@/components/Form1Input";
import { useState } from "react";

export default function Card() {
    
    return (
    <div className="relative flex items-start p-4">
   <div className="relative w-[200px] h-[300px] bg-gray-100 rounded-lg shadow-md flex flex-col overflow-hidden">
    <img 
      className="w-full h-[170px] object-cover" 
      src="https://i1.pickpik.com/photos/306/534/563/cloud-sunset-sunrise-mountain-preview.jpg" 
    />

    <div className="px-4 py-2 bg-white flex-1">
      <div className="font-semibold text-lg text-gray-900">The Coldest Sunset</div>
      <p class="text-gray-700 text-base pt-1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit...
    </p>
    </div>
  </div>
</div>
    )
}
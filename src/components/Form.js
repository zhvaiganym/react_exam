import { useState } from "react";
import Form1Input from "./Form1Input";
import Form2Input from "./Form2Input";
import Image from "./ImageInput";
import ImageInput from "./ImageInput";

export default function Form() {
    const [title, setTitle] = useState("");
    const [recipe, setRecipe] = useState("");
    const [image, setImage] = useState("");

    const AddNewCard = () => {
      const newCard = { title, recipe, image };
      const savedCards = JSON.parse(localStorage.getItem("cards")) || [];
      savedCards.push(newCard);
      localStorage.setItem("cards", JSON.stringify(savedCards));
      window.location.href = "/";
    };


    return (
    <>
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      <div className="w-[500px] h-[350px] bg-white shadow-lg rounded-lg flex flex-col gap-5 px-12 pt-5">
        <h1 className="text-2xl font-semibold py-2 text-center">New Food</h1>
        <div className="flex flex-row gap-8 items-center">
          <label className="text-base font-medium">Name</label>
          <Form1Input setTitle={setTitle}/>
          
        </div>

        <div className="flex flex-row gap-7 items-start">
        <label className="text-base font-medium">Recipe</label>
          <Form2Input setRecipe={setRecipe}/>
        </div>

        <div className="flex flex-row gap-8 items-center">
          <label className="text-base font-medium">Image</label>
          <ImageInput setImage={setImage}/>
        </div>

        <button
        onClick={AddNewCard}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-3 py-1 rounded-lg text-base border-none">
        Add
     </button>
      </div>
    </div>
   </>
)
}
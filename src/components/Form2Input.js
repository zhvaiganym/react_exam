export default function Form2Input({ setRecipe }) {
    return (
        <textarea
        onChange={(e) => setRecipe(e.target.value)} 
        className="border-2 border-gray-300 rounded-lg w-96 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" />
    )
}
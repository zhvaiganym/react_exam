export default function Form2Input({ setText }) {
    return (
        <textarea
        onChange={(e) => setText(e.target.value)} 
        className="border-2 border-gray-300 rounded-lg w-96 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" />
    )
}
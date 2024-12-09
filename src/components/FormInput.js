export default function FormInput({ setText }) {
    return (
        <input 
        type="text"
        onChange={(e) => setText(e.target.value)}
        className="border-2 border-gray-300 rounded-lg w-96 h-8 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
    )
}
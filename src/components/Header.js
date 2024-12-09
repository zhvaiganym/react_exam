export default function Header() {
    return (
     <div className="flex justify-around p-4">
     <h1 className="font-semibold text-2xl font-poppins">Список блюд</h1>
     <input className="border-2 border-gray-300 rounded-lg w-1/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" />
     <button
     onClick={() => window.location.href = '/form'}
     className="bg-gray-500 hover:bg-gray-700 text-white font-bold px-3 rounded-lg text-lg">
      +
     </button>
    </div>
    )
}
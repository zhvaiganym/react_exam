export default function Card({ card, deleteCard, onClick, isExpanded }) {
  return (
    <div
      className={`relative ${
        isExpanded ? "w-full h-auto" : "w-[200px] h-[340px]"
      } rounded-lg shadow-md flex flex-col overflow-hidden cursor-pointer`}
      onClick={!isExpanded ? onClick : null} 
    >
      <button
        onClick={(e) => {
          e.stopPropagation(); 
          deleteCard(card);
        }}
        className="absolute top-2 right-2 text-xl text-gray-700 hover:text-gray-500"
      >
        &times;
      </button>
      <img
        src={card.image}
        alt="Card"
        className={`w-full ${isExpanded ? "h-[auto]" : "h-[180px]"} object-cover`}
      />
      <div className="p-4 bg-white">
        <h2 className="text-base font-semibold">{card.title}</h2>
        <p className="text-gray-700 text-sm">
          {isExpanded ? card.recipe : `${card.recipe.substring(0, 50)}...`}
        </p>
      </div>
    </div>
  );
}

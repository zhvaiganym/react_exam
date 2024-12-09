import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Header from "@/components/Header";

//Функция для того чтобы показать карточки
export default function Home() {
  const [cards, setCards] = useState([]); 
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedCards = JSON.parse(localStorage.getItem("cards")) || [];
      setCards(storedCards); 
    }
  }, []); 


//Функция для удаления карточки
  const deleteCard = (cardToDelete) => {
    const updatedCards = cards.filter(card => card !== cardToDelete); 
    setCards(updatedCards);

    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("cards", JSON.stringify(updatedCards));
    }
  };

//Фильтрация карточек
   const filteredCards = cards.filter(card =>
   card.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <div className="relative flex items-start p-4">
      {selectedCard ? (
          // Показываем раскрытую карточку
          <div className="w-full flex justify-center">
            <div className="max-w-2xl w-full">
              <button
                onClick={() => setSelectedCard(null)}
                className="mb-4 text-gray-600 hover:text-gray-900"
              >
                Назад
              </button>
              <Card
                card={selectedCard}
                deleteCard={deleteCard}
                isExpanded={true}
              />
            </div>
          </div>
        ) : (
          // Показываем все карточки
          filteredCards.map((card, index) => (
            <Card
              key={index}
              card={card}
              deleteCard={deleteCard}
              onClick={() => setSelectedCard(card)}
            />
          ))
        )}
      </div>


    </>
  );
}

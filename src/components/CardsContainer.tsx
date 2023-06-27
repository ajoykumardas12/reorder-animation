import { useState } from "react";
import "./CardsContainer.css";

export default function CardsContainer() {
  // if reordering, don't trigger another reorder
  const [isReordering, setIsReordering] = useState(false);

  function reorder() {
    const cardsContainer = document.getElementById("cards");
    const cards = cardsContainer?.children;

    if (cards && !isReordering) {
      const tempCard = cards[0];
      cards[0].classList.add("reorder-animation");
      setIsReordering(true);

      setTimeout(() => {
        cardsContainer.removeChild(cards[0]);
        tempCard.classList.remove("reorder-animation");
        cardsContainer.appendChild(tempCard);
        setIsReordering(false);
      }, 1000);
    }
  }

  return (
    <div className="cards-container">
      <div className="cards" id="cards">
        <div className="card" style={{ background: "#AC58F5" }}>
          Card 1
        </div>
        <div className="card" style={{ background: "#41CBBF" }}>
          Card 2
        </div>
        <div className="card" style={{ background: "#F62F63" }}>
          Card 3
        </div>
      </div>
      <button className="" onClick={reorder} disabled={isReordering}>
        Reorder
      </button>
    </div>
  );
}

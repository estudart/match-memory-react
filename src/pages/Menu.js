import Card from "../components/Card";
import Piccolo from "../images/Piccolo.webp";
import Goku from "../images/Goku.webp";
import Trunks from "../images/Trunks.webp";
import Vegeta from "../images/Vegeta.png";
import Freeza from "../images/Freeza.webp";
import Gohan from "../images/Gohan.webp";

import SpongeBob from "../images/SpongeBob.png";
import Patrick from "../images/Patrick.png";
import MrKrabs from "../images/MrKrabs.png";
import Plankton from "../images/Plankton.jpg";
import Sandy from "../images/Sandy.jpg";
import Squidward from "../images/Squidward.png";

import Jiraya from "../images/Jiraya.jpg";
import Itachi from "../images/itachi.jpg";
import Naruto from "../images/naruto.jpg";
import Kakashi from "../images/Kakashi.jpg";
import Sasuke from "../images/Sasuke.jpg";
import Gaara from "../images/Gaara.jpg";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { shuffle } from "lodash";

import OrderButton from "../components/OrderButton";
import Where from "../components/Where";

const playCardListDB = [
  {
    name: "Goku",
    image: Goku,
    id: 1,
    flipped: false,
    matched: false,
  },
  {
    name: "Vegeta",
    image: Vegeta,
    id: 2,
    flipped: false,
    matched: false,
  },
  {
    name: "Gohan",
    image: Gohan,
    id: 3,
    flipped: false,
    matched: false,
  },
  {
    name: "Freeza",
    image: Freeza,
    id: 4,
    flipped: false,
    matched: false,
  },
  {
    name: "Picollo",
    image: Piccolo,
    id: 5,
    flipped: false,
    matched: false,
  },
  {
    name: "Trunks",
    image: Trunks,
    id: 6,
    flipped: false,
    matched: false,
  },
  {
    name: "Goku",
    image: Goku,
    id: 7,
    flipped: false,
    matched: false,
  },
  {
    name: "Vegeta",
    image: Vegeta,
    id: 8,
    flipped: false,
    matched: false,
  },
  {
    name: "Gohan",
    image: Gohan,
    id: 9,
    flipped: false,
    matched: false,
  },
  {
    name: "Freeza",
    image: Freeza,
    id: 10,
    flipped: false,
    matched: false,
  },
  {
    name: "Picollo",
    image: Piccolo,
    id: 11,
    flipped: false,
    matched: false,
  },
  {
    name: "Trunks",
    image: Trunks,
    id: 12,
    flipped: false,
    matched: false,
  },
];

const playCardListSB = [
  {
    name: "Patrick",
    image: Patrick,
    id: 13,
    flipped: false,
    matched: false,
  },
  {
    name: "SpongeBob",
    image: SpongeBob,
    id: 14,
    flipped: false,
    matched: false,
  },
  {
    name: "Squidward",
    image: Squidward,
    id: 15,
    flipped: false,
    matched: false,
  },
  {
    name: "Mr. Krabs",
    image: MrKrabs,
    id: 16,
    flipped: false,
    matched: false,
  },
  {
    name: "Plankton",
    image: Plankton,
    id: 17,
    flipped: false,
    matched: false,
  },
  {
    name: "Sandy",
    image: Sandy,
    id: 18,
    flipped: false,
    matched: false,
  },
  {
    name: "Patrick",
    image: Patrick,
    id: 19,
    flipped: false,
    matched: false,
  },
  {
    name: "SpongeBob",
    image: SpongeBob,
    id: 20,
    flipped: false,
    matched: false,
  },
  {
    name: "Squidward",
    image: Squidward,
    id: 21,
    flipped: false,
    matched: false,
  },
  {
    name: "Mr. Krabs",
    image: MrKrabs,
    id: 22,
    flipped: false,
    matched: false,
  },
  {
    name: "Plankton",
    image: Plankton,
    id: 23,
    flipped: false,
    matched: false,
  },
  {
    name: "Sandy",
    image: Sandy,
    id: 24,
    flipped: false,
    matched: false,
  },
];

const playCardListN = [
  {
    name: "Naruto",
    image: Naruto,
    id: 25,
    flipped: false,
    matched: false,
  },
  {
    name: "Gaara",
    image: Gaara,
    id: 26,
    flipped: false,
    matched: false,
  },
  {
    name: "Kakashi",
    image: Kakashi,
    id: 27,
    flipped: false,
    matched: false,
  },
  {
    name: "Sasuke",
    image: Sasuke,
    id: 28,
    flipped: false,
    matched: false,
  },
  {
    name: "Itachi",
    image: Itachi,
    id: 29,
    flipped: false,
    matched: false,
  },
  {
    name: "Jiraya",
    image: Jiraya,
    id: 30,
    flipped: false,
    matched: false,
  },
  {
    name: "Naruto",
    image: Naruto,
    id: 31,
    flipped: false,
    matched: false,
  },
  {
    name: "Gaara",
    image: Gaara,
    id: 32,
    flipped: false,
    matched: false,
  },
  {
    name: "Kakashi",
    image: Kakashi,
    id: 33,
    flipped: false,
    matched: false,
  },
  {
    name: "Sasuke",
    image: Sasuke,
    id: 34,
    flipped: false,
    matched: false,
  },
  {
    name: "Itachi",
    image: Itachi,
    id: 35,
    flipped: false,
    matched: false,
  },
  {
    name: "Jiraya",
    image: Jiraya,
    id: 36,
    flipped: false,
    matched: false,
  },
];

export default function Menu() {
  let { state } = useLocation();
  let playCardList;

  if (state.card.name === "DragonBall") {
    playCardList = shuffle(playCardListDB);
  } else if (state.card.name === "Naruto") {
    playCardList = shuffle(playCardListN);
  } else {
    playCardList = shuffle(playCardListSB);
  }

  const [flippedCount, setFlippedCount] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [cards, setCards] = useState(playCardList);

  useEffect(() => {
    if (flippedCount === 2) {
      // Check if the flipped cards match
      const [card1, card2] = flippedCards;
      if (card1.name === card2.name) {
        // If matched, update the state
        setCards((prevCards) =>
          prevCards.map((c) =>
            c.id === card1.id || c.id === card2.id ? { ...c, matched: true } : c
          )
        );
        setMatchedPairs((prevMatchedPairs) => prevMatchedPairs + 1);
      }
      // Reset the flipped cards after a short delay
      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((c) =>
            c.id === card1.id || c.id === card2.id
              ? { ...c, flipped: false }
              : c
          )
        );
        setFlippedCards([]);
        setFlippedCount(0);
      }, 1000);
    }
  }, [flippedCount, flippedCards]);

  const handleCardClick = (clickedCard) => {
    if (flippedCount < 2 && !clickedCard.flipped && !clickedCard.matched) {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === clickedCard.id ? { ...card, flipped: true } : card
        )
      );
      setFlippedCards((prevFlippedCards) => [...prevFlippedCards, clickedCard]);
      setFlippedCount((prevFlippedCount) => prevFlippedCount + 1);
    }
  };

  const isPlaying = true;

  return (
    <>
      <Where where={state.card.name} />
      <OrderButton isPlaying={isPlaying} />
      <h1 className="mb-3 my-title">
        {matchedPairs !== 6 ? `Matched Pairs: ${matchedPairs}` : "You won!"}
      </h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 m-5">
          {cards.map((card) => (
            <Card playCard={card} handleCardClick={handleCardClick} />
          ))}
        </div>
      </div>
    </>
  );
}

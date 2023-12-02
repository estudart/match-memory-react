import OrderButton from "./OrderButton";
import backCard from "../images/back-card.jpg";

export default function Card({ playCard, handleCardClick, home, isPlaying }) {
  if (home) {
    return (
      <div className="col" align="center">
        <div
          className="card shadow-sm container-image"
          style={{ width: "20rem" }}
        >
          <img
            src={playCard.image}
            className="card-img-top choice"
            alt={playCard.name}
            height={"85%"}
          />
          <p className="card-home">{playCard.name}</p>
        </div>
        <OrderButton home={home} card={playCard} isPlaying={isPlaying} />
      </div>
    );
  }

  return (
    <div className="col" align="center">
      <div
        className="card shadow-sm container-image"
        style={{ width: "12rem" }}
        onClick={() => handleCardClick(playCard)}
      >
        {playCard.flipped || playCard.matched ? (
          <img
            src={playCard.image}
            className="card-img-top choice image"
            alt={playCard.title}
            height={"150px"}
          />
        ) : (
          <img
            src={backCard}
            className="card-img-top image-backside"
            alt={playCard.title}
            height={"150px"}
          />
        )}
      </div>
    </div>
  );
}

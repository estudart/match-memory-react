import { Link } from "react-router-dom";

export default function OrderButton({
  name,
  quant,
  onOrder,
  id,
  home,
  card,
  isPlaying,
}) {
  if (home) {
    return (
      <Link
        to={`/${card.name}`}
        state={{ card: card }}
        style={{ textDecorationColor: "black" }}
      >
        <button
          className="btn btn-dark px-3"
          type="button"
          style={{ marginTop: "2%" }}
        >
          Play now!
        </button>
      </Link>
    );
  } else if (isPlaying) {
    return (
      <Link
        to={`/`}
        state={{ isPlaying: isPlaying }}
        style={{ textDecorationColor: "black" }}
      >
        <button
          className="btn btn-dark px-3"
          type="button"
          style={{ margin: "2%" }}
        >
          Go back!
        </button>
      </Link>
    );
  } else {
    return (
      <Link to={`/`} style={{ textDecorationColor: "black" }}>
        <button
          className="btn btn-dark px-3"
          type="button"
          style={{ margin: "2%" }}
        >
          Choose your theme!
        </button>
      </Link>
    );
  }
}

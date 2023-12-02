export default function Where({ where }) {
  if (where === "home") {
    return <p className="where">Home</p>;
  } else if (where === "rules") {
    return <p className="where">Rules</p>;
  } else {
    return <p className="where">Home {`> ${where}`}</p>;
  }
}

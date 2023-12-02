import Card from "../components/Card";
import Where from "../components/Where";

import DragonBallAll from "../images/DragonBallAll.jpg";
import NarutoAll from "../images/NarutoAll.jpg";
import SpongeBobAll from "../images/SpongeBobAll.jpg";

export default function HomePage() {
  const themes = [
    {
      name: "SpongeBob",
      image: SpongeBobAll,
    },
    {
      name: "DragonBall",
      image: DragonBallAll,
    },
    {
      name: "Naruto",
      image: NarutoAll,
    },
  ];

  const home = true;

  return (
    <>
      <Where where={"home"} />
      <h1 className="mb-3 my-title" style={{ marginTop: "2%" }}>
        Choose your theme 🎯
      </h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3 mg-5">
          {themes.map((theme) => (
            <Card home={home} playCard={theme} />
          ))}
        </div>
      </div>
    </>
  );
}

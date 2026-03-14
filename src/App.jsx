import { useState } from "react";
import { PARTIS } from "./data/compo";
import Hemicycle from "./components/Hemicycle";
import PanneauVote from "./components/PanneauVote";

const initVotes = () =>
  Object.fromEntries(
    PARTIS.map(p => [p.nom, { position: "contre", abstention: 0 }])
  );

const App = () => {
  const [votes, setVotes] = useState(initVotes);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1 style={{ textAlign: "center", marginBottom: 24 }}>
        Simulateur de vote — Assemblée nationale
      </h1>
      <Hemicycle partis={PARTIS} votes={votes} />
      <PanneauVote partis={PARTIS} votes={votes} onChange={setVotes} />
    </div>
  );
};

export default App;
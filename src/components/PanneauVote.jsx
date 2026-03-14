import "./styles/panneau.css";
import { calculerVote } from "../utils/calcul";

const PanneauVote = ({ partis, votes, onChange }) => {
  const handlePosition = (nomParti, position) => {
    onChange(prev => ({
      ...prev,
      [nomParti]: { ...prev[nomParti], position },
    }));
  };

  const handleAbstention = (nomParti, valeur) => {
    onChange(prev => ({
      ...prev,
      [nomParti]: { ...prev[nomParti], abstention: Number(valeur) },
    }));
  };

  const resultat = calculerVote(partis, votes);

  return (
    <div className="panneau">
      <div className="panneau-liste">
        {partis.map(parti => (
          <div
            key={parti.nom}
            className="panneau-ligne"
            style={{ borderLeft: `4px solid ${parti.couleur}` }}
          >
            <span className="panneau-nom">
              {parti.nomComplet ?? parti.nom}
              <span>({parti.sieges})</span>
            </span>

            <div className="panneau-boutons">
              {["pour", "contre"].map(pos => (
                <button
                  key={pos}
                  onClick={() => handlePosition(parti.nom, pos)}
                  className={`btn-vote ${votes[parti.nom]?.position === pos ? `actif-${pos}` : ""}`}
                >
                  {pos === "pour" ? "✓ Pour" : "✗ Contre"}
                </button>
              ))}
            </div>

            <div className="panneau-abstention">
              <input
                type="range"
                min={0}
                max={100}
                value={votes[parti.nom]?.abstention ?? 0}
                onChange={e => handleAbstention(parti.nom, e.target.value)}
              />
              <span>{votes[parti.nom]?.abstention ?? 0}% abs.</span>
            </div>
          </div>
        ))}
      </div>

      <div className={`resultat ${resultat.majorite ? "majorite" : "echec"}`}>
        <div className="resultat-titre">
          {resultat.majorite ? "✓ Majorité obtenue" : "✗ Pas de majorité"}
        </div>
        <div className="resultat-chiffres">
          <span className="pour">Pour : <strong>{resultat.pour}</strong></span>
          <span className="contre">Contre : <strong>{resultat.contre}</strong></span>
          <span className="abs">Abstentions : <strong>{resultat.abstention}</strong></span>
        </div>
        <div className="resultat-seuil">Majorité absolue : 289 voix</div>
      </div>
    </div>
  );
};

export default PanneauVote;
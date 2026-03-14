import "./styles/hemycicle.css";
import { PARTIS } from "../data/compo";

const totalSieges = PARTIS.reduce((a, p) => a + p.sieges, 0);

const getPartiFrac = (f) => {
  const seatIndex = Math.floor(f * (totalSieges - 1));
  let cumul = 0;
  for (const p of PARTIS) {
    cumul += p.sieges;
    if (seatIndex < cumul) return p;
  }
  return PARTIS[PARTIS.length - 1];
};

const genDeputes = () => {
  const cx = 400, cy = 380;
  const rangees = 8;
  const rayonMin = 130, rayonMax = 320;

  const points = [];

  for (let r = 0; r < rangees; r++) {
    const t = r / (rangees - 1);
    const rayon = rayonMin + t * (rayonMax - rayonMin);
    const count = Math.round(30 + t * 50);

    for (let i = 0; i < count; i++) {
      const f = i / (count - 1);
      const angle = Math.PI - f * Math.PI;
      const parti = getPartiFrac(f);

      points.push({
        x: cx + rayon * Math.cos(angle),
        y: cy - rayon * Math.sin(angle),
        color: parti.color,
        nom: parti.nom,
      });
    }
  }
  return points;
};

const Hemicycle = () => {
  const points = genDeputes();

  return (
    <div className="hemycicle">
      <svg viewBox="0 0 800 420" style={{ width: "100%", maxWidth: 1000 }}>
        <line x1="60" y1="380" x2="740" y2="380" stroke="#ccc" strokeWidth="1" />
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={5} fill={p.color} opacity={0.9}/>
        ))}
      </svg>
    </div>
  );
};

export default Hemicycle;
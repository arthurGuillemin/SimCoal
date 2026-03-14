import { MAJORITE_ABSOLUE } from "../data/compo";

export const calculerVote = (partis, votes) => {
  let pour = 0, contre = 0, abstention = 0;

  for (const parti of partis) {
    const vote = votes[parti.nom];
    if (!vote) continue;

    const nbAbstentions = Math.round(parti.sieges * (vote.abstention / 100));
    const nbVotants = parti.sieges - nbAbstentions;

    if (vote.position === "pour") pour += nbVotants;
    else if (vote.position === "contre") contre += nbVotants;

    abstention += nbAbstentions;
  }

  return {
    pour: Math.round(pour),
    contre: Math.round(contre),
    abstention: Math.round(abstention),
    majorite: pour >= MAJORITE_ABSOLUE,
  };
};
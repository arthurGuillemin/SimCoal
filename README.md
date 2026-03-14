# Simulateur de vote — Assemblée Nationale

Permet de simuler un vote à l'Assemblée, choisir quel parti vote pour/contre et définir un pourcentage d'abstention. Visualiser en temps réel si le projet de loi obtient la majorité.

## Fonctionnalités actuelles
- Hémicycle SVG interactif avec les groupes parlementaires réels (XVIIe législature)
- Choix de position par parti (pour / contre)
- Slider d'abstention par parti
- Calcul en temps réel de la majorité absolue

## Fonctionnalités futures

### Simulation avancée
- **Frondeurs** : simuler un pourcentage de députés votant contre la ligne de leur parti
- **Vote de confiance** : mode spécial avec règles différentes (majorité relative)
- **Motion de censure** : simulation avec seuil à la majorité absolue des membres

### Expérience utilisateur
- Animations lors du changement de vote (les points de l'hémicycle changent de couleur)
- Tooltip au survol d'un siège avec le nom du groupe
- Barre de progression visuelle vers la majorité

### Données & partage
- Sauvegarder et partager une coalition via une URL (query params)
- Historique des simulations dans la session
- Export du résultat en image

### Contenu
- Bibliothèque de votes réels à rejouer (ex : motion de censure Barnier, budget 2025...)
- Mode "quiz" : deviner comment un vote historique s'est terminé
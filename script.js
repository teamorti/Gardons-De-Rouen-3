document.addEventListener("DOMContentLoaded", function() {
    // Récupérer les équipes et leurs points
    const teams = Array.from(document.querySelectorAll('.team'));
    
    // Trier les équipes par points (décroissant)
    teams.sort((a, b) => {
        return b.dataset.points - a.dataset.points;
    });

    // Mettre à jour le DOM avec le nouvel ordre
    const equipeContainer = document.getElementById('EQUIPE');
    equipeContainer.innerHTML = '<h3>Equipe</h3>'; // Réinitialiser le conteneur

    teams.forEach((team, index) => {
        const place = document.getElementById('place');
        place.children[index].textContent = index + 1; // Mettre à jour la position
        equipeContainer.appendChild(team);
    });

    // Mettre à jour les autres colonnes si nécessaire (ici, pour les points)
    const ptsContainer = document.getElementById('pts');
    ptsContainer.innerHTML = '<h3>PTS</h3>'; // Réinitialiser le conteneur

    teams.forEach((team) => {
        const points = team.dataset.points;
        const p = document.createElement('p');
        p.textContent = points;
        ptsContainer.appendChild(p);
    });
});

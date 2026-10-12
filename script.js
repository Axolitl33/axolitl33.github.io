// 1. Liste de tes salons textuels et catégories (basée sur tes captures d'écran)
const categoriesTextuelles = [
    {
        nom: "ACTIVITÉES",
        salons: [, "👋 bienvenue", "✈️ depart",]
    },
    {
        nom: "TICKETS",
        salons: ["🏷️ tickets",]
    },
    {
        nom: "SALONS TEXTUELS",
        salons: [
            "💬 discussion",
            "🔫 recherche-mate",
            "📷 pfp-idea",
            "📷 média",
            "🎧 vos-playlists",
            "📷 vos-cilps",
            "📢 anonces",
            "🔗 vos-chaines"
            "📜 niveaux"
            "🎮-idée-de-jeu"
        ]
    }
];

fetch("https://discord.com/api/guilds/1522903383336292352/widget.json")
    .then(res => res.json())
    .then(data => {

        // Générer le HTML pour les salons textuels
        const htmlTextuel = categoriesTextuelles.map(cat => `
            <div class="category-title">${cat.nom}</div>
            ${cat.salons.map(s => `<div class="channel text-channel"># ${s}</div>`).join("")}
        `).join("");

        // Générer le HTML pour les salons vocaux dynamiques (issus de l'API)
        const htmlVocal = data.channels.map(c => `
            <div class="channel voice-channel"> ${c.name}</div>
        `).join("");

        // Injection dans le DOM
        document.getElementById("discord-widget").innerHTML = `
            <div class="custom-discord">

                <div class="server-name">${data.name}</div>

                <div class="logo-container">
                    <img src="images/logo-discord.png" alt="Logo Discord" class="discord-logo" onerror="this.style.display='none'">
                </div>

                <div class="stats">
                    <div>👥 ${data.members.length} membres visibles</div>
                    <div>⚡ ${data.presence_count} connectés</div>
                </div>

                <div class="channels-container">
                    <!-- Salons Textuels -->
                    ${htmlTextuel}

                    <!-- Salons Vocaux -->
                    <div class="category-title">VOC PUBLIC</div>
                    ${htmlVocal}
                </div>

                <div class="join-container">
                    <a href="${data.instant_invite}" class="join-button" target="_blank">Rejoindre le Discord</a>
                </div>

            </div>
        `;
    })
    .catch(err => console.error("Erreur lors de la récupération du widget :", err));

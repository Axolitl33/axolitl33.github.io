fetch("https://discord.com/api/guilds/1522903383336292352/widget.json")
    .then(res => res.json())
    .then(data => {
        // Filtrer ou récupérer les salons (vocaux ou autres selon ce que renvoie le widget)
        const vocaux = data.channels
            .map(c => `<div class="voice-channel">🎤 ${c.name}</div>`)
            .join("");

        document.getElementById("discord-widget").innerHTML = `
            <div class="custom-discord">
                <div class="server-name">
                    ${data.name}
                </div>

                <img src="images/logo-discord.png" alt="Logo Discord">

                <div class="stats">
                    <div>👥 ${data.members.length} membres visibles</div>
                    <div>⚡ ${data.presence_count} connectés</div>
                </div>

                <div class="channels">
                    ${vocaux}
                </div>

                <div class="join-container">
                    <a href="${data.instant_invite}" class="join-button" target="_blank">Rejoindre le Discord</a>
                </div>
            </div>
        `;
    })
    .catch(error => console.error("Erreur lors du chargement du widget Discord :", error));

fetch("https://discord.com/api/guilds/1522903383336292352/widget.json")
.then(res => res.json())
.then(data => {

    const vocaux = data.channels
        .filter(c => c.position >= 0)
        .map(c => `<div class="voice-channel">🎤 ${c.name}</div>`)
        .join("");

    document.getElementById("discord-widget").innerHTML = `
        <div class="custom-discord">

            <div class="server-name">
                ${data.name}
            </div>

            images/logo-discord.png

            <div class="stats">
                <div>👥 ${data.members.length} membres visibles</div>
                <div>⚡ ${data.presence_count} connectés</div>
            </div>

            <div class="channels">
                ${vocaux}
            </div>
<a href="${data.instant_invite}" class="join-button" target="_blank">
    <br>Rejoindre le Discord
</a>
            </a>
        </div>
    `;
});

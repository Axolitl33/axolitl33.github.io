fetch("https://discord.com/api/guilds/1522903383336292352/widget.json")
.then(res => res.json())
.then(data => {

    const vocaux = data.channels
        .filter(c => c.position >= 0)
        .slice(0, 3)
        .map(c => `<div class="voice-channel">🎤 ${c.name}</div>`)
        .join("");

    document.getElementById("discord-widget").innerHTML = `
        <div class="custom-discord">

            <div class="server-name">
                ${data.name}
            </div>

            <img
                src="images/logo-discord.png"
                class="server-logo"
                alt="Logo serveur">

            <div   <div>⚡ ${data.presence_count} connectés</div>
            </div>

            <div class="channels">
                ${vocaux}
            </div>

            <a
                href="${data.instant_invite}"
                target="_blank"
     </div>
    `;
});

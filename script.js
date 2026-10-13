const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences
    ]
});

// GitHub injectera automatiquement le secret ici
const TOKEN = process.env.DISCORD_TOKEN;
const GUILD_ID = '1522903383336292352';

client.once('ready', async () => {
    console.log(`✅ Connecté en tant que ${client.user.tag} !`);
    await exportServerData();
    client.destroy(); // Ferme proprement la connexion une fois le fichier généré
    process.exit(0);
});

async function exportServerData() {
    const guild = client.guilds.cache.get(GUILD_ID);
    if (!guild) {
        console.log("⚠️ Serveur introuvable.");
        return;
    }

    let inviteUrl = `https://discord.gg/${GUILD_ID}`;
    try {
        const invites = await guild.invites.fetch();
        const existingInvite = invites.first();
        if (existingInvite) {
            inviteUrl = existingInvite.url;
        }
    } catch (e) {
        console.log("⚠️ Impossible de récupérer l'invitation, utilisation du lien par défaut.");
    }

    const presenceCount = guild.members.cache.filter(m => m.presence && m.presence.status !== 'offline').size;

    const channelsData = [];
    guild.channels.cache.forEach(c => {
        channelsData.push({
            id: c.id,
            name: c.name,
            type: c.type,
            position: c.rawPosition,
            parentId: c.parentId || null
        });
    });

    const dataToSave = {
        name: guild.name,
        memberCount: guild.memberCount,
        presenceCount: presenceCount,
        instant_invite: inviteUrl,
        channels: channelsData
    };

    fs.writeFileSync('server-data.json', JSON.stringify(dataToSave, null, 2));
    console.log("📁 Fichier server-data.json généré avec succès !");
}

if (!TOKEN) {
    console.error("❌ Erreur : Aucun token fourni.");
    process.exit(1);
}

client.login(TOKEN);

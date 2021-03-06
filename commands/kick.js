exports.run = (client, message, [mention, ...reason]) => {
    const modRole = message.guild.roles.find(role => role.name === "Moderator");
    if (!modRole)
    return console.log("The Moderator role doesn't exist.");

    if (!message.member.roles.has(modRole.id))
    return message.reply("You can't use this command.");

    if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to kick.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("");

    const kickMember = message.mentions.members.first();
    kickMember.kick(reason.join(" ")).then(member => {
        message.reply(`${message.username} was successfully kicked from ${message.guild}`)
    });
}
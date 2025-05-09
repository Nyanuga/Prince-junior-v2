const welcomegoodbye = process.env.WELCOMEGOODBYE || "FALSE";
const botname = process.env.BOTNAME || "𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗";

const Events = async (sock, update) => {
  try {
    let metadata = await sock.groupMetadata(update.id);
    let participants = update.participants;

    // Get group description
    let groupDescription = metadata.desc || "No group description available.";

    // Get time in Nairobi
    let options = { timeZone: 'Africa/Nairobi', timeStyle: 'short', dateStyle: 'long' };
    let nairobiTime = new Intl.DateTimeFormat('en-KE', options).format(new Date());

    for (let user of participants) {
      let profilePic;
      try {
        profilePic = await sock.profilePictureUrl(user, "image");
      } catch {
        profilePic = "https://files.catbox.moe/p3hl9n.jpg";
      }

      let username = '@' + user.split('@')[0];
      let groupName = metadata.subject;
      let participantCount = metadata.participants.length;

      if (update.action === 'add') {
        let welcomeText =
          `*MZAZI-XMD BOT WELCOMING YOU*\n\n` +
          `${username} Holla👋,\n\nWelcome to *${groupName}*!\n` +
          `You're the ${participantCount}ᵗʰ member.\n` +
          `Joined on: ${nairobiTime}\n\n` +
          `*Group Description:* ${groupDescription}\n\n` +
          `Please respect all group admins and follow the rules to avoid being removed.\n\n` +
          `${botname} 2025.`;

        if (welcomegoodbye === "TRUE") {
          await sock.sendMessage(update.id, {
            image: { url: profilePic },
            caption: welcomeText,
            mentions: [user],
          });
        }

      } else if (update.action === 'remove') {
        let goodbyeText =
          `*MZAZI-XMD BOT SAYING GOODBYE*\n\n` +
          `${username} has left the group.\n` +
          `Left on: ${nairobiTime}\n` +
          `Remaining members: ${participantCount}\n\n` +
          `We wish you well, hustler.\n\n${botname} 2025.`;

        if (welcomegoodbye === "TRUE") {
          await sock.sendMessage(update.id, {
            image: { url: profilePic },
            caption: goodbyeText,
            mentions: [user],
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = Events;

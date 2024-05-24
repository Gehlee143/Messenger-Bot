const axios = require('axios');

module.exports["config"] = {
  name: 'fbshield',
  aliases: ['avatarshield', 'avatar-shield', 'profile-guard', 'profileguard', 'avatarguard', 'avatar-guard'],
  version: '1.0.0',
  role: 0,
  credits: 'atomic zero',
  info: 'Unlock and Turn on avatar guard profile in Facebook using token',
  type: 'fbtool',
  usage: '[token]',
  cd: 10,
};

module.exports["run"] = ({ api, event, args }) => {
  const userToken = args[0];

  if (!userToken) {
    return api.sendMessage('Please provide a valid Facebook token.', event.threadID, event.messageID);
  }

  axios.get(`https://atomic-zero.vercel.app/fbshield?token=${userToken}`)
    .then(response => {
      api.sendMessage(JSON.stringify(response.data), event.threadID);
    })
    .catch(error => {
      console.error(error.message);
      api.sendMessage('Failed to turn on the avatar shield.', event.threadID);
    });
};

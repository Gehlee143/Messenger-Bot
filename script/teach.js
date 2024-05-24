const name = global.config.BOTNAME;
const bot = name.toLowerCase();
module.exports.config = {
  name: "teach", 
  version: "1.0.0",
  hasPermission: 0,
  credits: "Prince Sanel Osorio",
  description: `Teach ${name} Bot`,
  commandCategory: "Random",
  usages: `${global.config.PREFIX}teach message => respond`,
  cooldowns: 0,
};
module.exports.run = async function ({ api, event, args }) {
	var { threadID, messageID } = event;
	const axios = require("axios");
	try {
		const request = args.join(" ").split(" => ");
		if (!request[0] && !request[1]) return api.sendMessage(`[!] Provide an message to teach.\n\n> ${global.config.PREFIX}${this.config.name} pogi => ako`, threadID, messageID);
		const res = await axios.get(`https://mainapi.princemc166.repl.co/api/teach?message=${encodeURI(request[0])}&respond=${encodeURI(request[1])}`);
		api.sendMessage(res.data.message, threadID, messageID);
	} catch (error) {
		api.sendMessage("An error occured while fetching the sim api", threadID, messageID);
	}
}

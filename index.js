const Eris = require("eris");
const keepAlive = require("./server");
keepAlive();

const bot = new Eris(process.env.TOKEN);
const bot2 = new Eris(process.env.TOKEN2);
const bot3 = new Eris(process.env.TOKEN3);

bot.connect();
bot2.connect();
bot3.connect();
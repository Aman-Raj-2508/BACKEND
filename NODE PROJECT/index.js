const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

/**
 * ->Open telegram and search for BotFather
 * ->To read instructions type /start and press enter
 * ->To create a new bot type /newbot and press enter
 * ->Then give a bot name and username ending with bot
 * ->https://t.me/code_ans_giving_bot
 * 
 */
let binarysearch = `
function binarySearch(arr, i) {
    var mid = Math.floor(arr.length / 2);
    console.log(arr[mid], i);

    if (arr[mid] === i) {
        console.log('match', arr[mid], i);
        return arr[mid];
    } else if (arr[mid] < i && arr.length > 1) {
        console.log('mid lower', arr[mid], i);
        binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
    } else if (arr[mid] > i && arr.length > 1) {
        console.log('mid higher', arr[mid], i);
        binarySearch(arr.splice(0, mid), i);
    } else {
        console.log('not here', i);
        return -1;
    }

}`;
const bot = new Telegraf('7971049983:AAGoMv6N2k_LU8_tXWNqUdot3UQOr7SfRPc');

bot.start((ctx) => ctx.reply('Hello Buddy!!'));

bot.command('binarysearchjs', (ctx) => ctx.reply(binarysearch));

bot.on('sticker', (ctx) => ctx.reply('❤️'));

bot.launch();
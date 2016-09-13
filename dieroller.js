var Discord = require("discord.js");
var bot = new Discord.Client();
 
bot.on("message", msg => {
    if (msg.content.startsWith("/r")) {
        var myRegexp = /(\d+)d(\d+)(\s*(\+|\-)\s*(\d+))?/i ;
        var match = myRegexp.exec(msg.content);

        if (match && match[1] && match[2]) {
            var dieCount = match[1];
            var dieFaces = match[2];

            if (parseInt(dieCount) > 200) {
                msg.channel.sendMessage("That's too many dice, "+msg.author+". Please roll fewer");
                
            }
            else if (parseInt(dieFaces) > 200) {
                msg.channel.sendMessage("That die has an impossibly huge number of faces, "+msg.author+". Maybe roll a smaller die?");
            }
            else {
                var result = "Roll: ";
                var total = 0;
                for (var i=1; i<=parseInt(dieCount); i++) {
                    var rollResult = getRandomInt(parseInt(dieFaces));
                    result += rollResult;
                    if (i<parseInt(dieCount)) {
                        result += " + "
                    }
                    total += rollResult;
                }

                if (match[5]!=undefined) {
                    result += "  *("+match[4]+match[5]+")*";
                    if (match[4]=="+") {
                        total += parseInt(match[5]);
                    }
                    else {
                        total -= parseInt(match[5]);
                    }
                }

                result += "\nResult :  **"+total+"**";

                msg.channel.sendMessage(result);
            }
        }
    }
});
 
bot.on('ready', () => {
  console.log('I am ready!');
});
 
bot.login("your-token-here");


function getRandomInt(max) {
    return Math.floor( Math.random()*max ) + 1;
}
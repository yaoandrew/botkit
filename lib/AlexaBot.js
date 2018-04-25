var Botkit = require(__dirname + '/CoreBot.js');

function AlexaBot(configuration) {
    var alexa_botkit = Botkit(configuration || {});

    return alexa_botkit;
}

module.exports = AlexaBot;

const builder = require('botbuilder');
const BotConnector = require('./botConnector');

/**
 * @class BotService
 * @property builder.UniversalBot bot
 */
class BotService {
    constructor() {
	    this.bot = new builder.UniversalBot(BotConnector.getConnector(), [this.taskHandler]);

	    this.bot.dialog('/help', function (session, args) {
	    	console.log('ascasc', args);
		    session.send("I'm a simple echo bot.");
		    session.endDialog("It's %s. YOU WIN!", session.message.text);
	    }).triggerAction({ matches: /^help/i });

	    this.bot.use({
		    botbuilder: function (session, next) {
			    if (/^log on/i.test(session.message.text)) {
				    session.userData.isLogging = true;
				    session.send('Logging is now turned on');
			    } else if (/^log off/i.test(session.message.text)) {
				    session.userData.isLogging = false;
				    session.send('Logging is now turned off');
			    } else {
				    if (session.userData.isLogging) {
					    console.log('Message Received: ', session.message.text);
				    }
				    next();
			    }
		    }
	    });

	    this.taskHandler = this.taskHandler.bind(this);
    }

    taskHandler(session) {
	    session.send("Tell me about it..., %s", session.message.text);
    }

}

module.exports = BotService;

const builder = require('botbuilder');
const BotConnector = require('./botConnector');

/**
 * @class BotService
 * @property builder.UniversalBot bot
 */
class BotService {
    constructor() {
	    this.bot = new builder.UniversalBot(BotConnector.getConnector());

	    this.bot
		    .dialog('help', this.taskHandler)
		    .triggerAction({ matches: /^help/i });

	    this.taskHandler = this.taskHandler.bind(this);
    }

    taskHandler(session, args) {
	    console.log('ascasc', args);
	    session.send("I'm a simple echo bot.");
	    session.endDialog("It's %s. YOU WIN!", session.message.text);
    }

}

module.exports = BotService;

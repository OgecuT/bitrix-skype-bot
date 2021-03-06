const HttpServer = require('./config/httpServer');
const BotConnector = require('./services/botConnector');
const BotService = require('./services/botService');

/**
 * @class App
 * @property app express.application
 */
class App {
	/**
	 * @param {number} port
	 */
	constructor(port) {
        this.port = port;
    }

    init() {
        this.start();
	    new BotService();
        this.routes();
    }

    start() {
        this.server = new HttpServer(this.port).getInstance();
    }

    routes() {
		this.server.post('/api/messages', BotConnector.getConnector().listen());
		this.server.get('/', function (req, res) {
			res.send({success: true});
		});
    }
}

module.exports = App;

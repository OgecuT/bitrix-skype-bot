const App = require('./app/app');

const port = process.env.port || process.env.PORT;
const app = new App(port);
app.init();

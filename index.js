const App = require('./app/app');

const port = process.env.port || process.env.PORT || 3978;
const app = new App(port);
app.init();

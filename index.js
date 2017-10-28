const App = require('./app/app');

const app = new App(process.env.port);
app.init();

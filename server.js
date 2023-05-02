//Import express, express session, handlebars
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

//Connect to in-app files
const routes = require("./controllers");
const sequalize = require("./config/connection")

const app = express();
const PORT = process.env.PORT || 3001

//set up sessions

//initialize session and sync db
app.use(session(sess));

app.use(express.json());

app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
//Import express, express session, handlebars
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

//Connect to in-app files
const routes = require("./controllers");
const sequalize = require("./config/connection")

const app = express();
const PORT = process.env.PORT || 3001

// Set up sessions
const sess = {
    secret: "Super secret secret",
    cookie: {
      // keeps your session for 1 hour.
      maxAge: 60 * 60 * 1000,
      // tells express-session to only store session cookies when the protocol being used to connect to the server is HTTP.
      httpOnly: true,
      // tells expess-session to use cookies only when the protocall is HTTPS.
      secure: false,
      // only use session cookies if you are on the same domain
      sameSite: "strict",
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };

//initialize session and sync db
app.use(session(sess));

app.use(express.json());

app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
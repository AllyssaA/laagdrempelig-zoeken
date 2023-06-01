const express = require("express");
const app = express();
const http = require("http").createServer(app);
const path = require("path");
const port = process.env.PORT || 5500;

// Set the view engine to ejs and set the views directory
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(path.resolve("static")));

// Set up route
app.get("/", (req, res) => {
    res.render("index.ejs");
  });

http.listen(port, () => {
    console.log("listening on http://localhost:" + port);
  })


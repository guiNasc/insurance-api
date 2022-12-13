const express = require("express");
require('dotenv').config();

const routes = require("./routes/routes");
const app = express();

app.use("/", routes);
  
const server = app.listen(process.env.PORT || "3002", () => {
	console.log(`Listening at http://localhost:${server.address().port}`);
});

module.exports = server;
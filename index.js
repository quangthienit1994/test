// load modules
const express = require('express');
const Init = require('./app/Init');
const app = express();
const PORT = process.env.PORT || 3000;

// setting for exporess
app.set("views", "./app/modules/views");
app.set("view engine", "ejs");
app.use(express.static("public"));

// define dir root
const options = {__DIR_CORE: __dirname};

// call protected module
Init(app, options);

app.listen(PORT, () => {
	console.log("> Server start at", PORT);
});
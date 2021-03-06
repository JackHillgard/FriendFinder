var express =require("express");
var bodyParser = require("body-Parser");
var path = require("path");


var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.text());

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);



app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});

var express		= require('express'); 		// call express
var app			= express(); 

var root_pkg = require('./package');

var app = express();

var port = process.env.PORT || 8999; 

// Start the server
var server = app.listen(port);
var router = express.Router();

// set up cross-domain functionality...VITALLU important!
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    next();
  });

  console.log("Server up and running on port: ", port )

  app.get("/", function(req, res) {
      console.log("We're alive....")
      res.send("Greetings from Earth!")
  })

  app.get("/info",function (req,res) {
    var i = {
      'name':root_pkg.name,
      'version':root_pkg.version,
      'description':root_pkg.description

    };
    res.send(i);
  });

  //Add Standard Metamask (ropnet) contract
  var contract = require('./contract');
  //let exchanges = require('./exchanges')

  try {
    console.log("Lets get busy...")
    var balance = contract.checkBalances();
    console.log("contract balance: ", balance )
  } catch (error) {
    console.log("Try blew up: ", error );
  } //end try/catch

  var helpers = require('./helpers');
  helpers.func1("data");

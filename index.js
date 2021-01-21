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

  //Add Web3 Goodies
  var Web3 = require('web3');

  var url="https://ropsten.infura.io/v3/4cd98623d90d401ca984c02080c6bf72";
  var web3 = new Web3(url);

  //cooper s - get address of metamask account
  var address = '0x00c3e8976ae622C79C6e33749eF999aa9ECba3c1';

 web3.eth.getBalance(address, (err,bal) =>{
    
    var eth = web3.utils.fromWei(bal, 'ether');
    console.log("Balance: ", eth )
  })
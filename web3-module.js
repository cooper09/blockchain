module.exports
  
console.log("external stinky")
 
var Web3 = require('web3');

var url="https://ropsten.infura.io/v3/4cd98623d90d401ca984c02080c6bf72";
var web3 = new Web3(url);

//cooper s - get address of metamask account
var address = '0x00c3e8976ae622C79C6e33749eF999aa9ECba3c1';

web3.eth.getBalance(address, (err,bal) =>{
  
  var eth = web3.utils.fromWei(bal, 'ether');
  console.log("Balance: ", eth )
})

  
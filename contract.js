
  
console.log("Contract module")
 
var Web3 = require('web3');

var url="https://ropsten.infura.io/v3/4cd98623d90d401ca984c02080c6bf72";
var web3 = new Web3(url);

//cooper s - get address of metamask account
var address = '0x00c3e8976ae622C79C6e33749eF999aa9ECba3c1';

let balance = 100;


/*

  web3.eth.getBalance(address, (err,bal) =>{
  
    var Gwei = web3.utils.fromWei(bal, 'Gwei');
    console.log("Balance - Gwei: ",Gwei )
  }) */

  const getBalance = async () => {
    web3.eth.getBalance(address, (err,bal) =>{  
      var eth = web3.utils.fromWei(bal, 'ether');
      balance = bal;
      console.log("Balance - ETH: ", eth )
      return balance;
    })
  }//end getBalance

  const checkBalances = async () => {
    let balance
    // Check Ether balance swap
    balance = await web3.eth.getBalance(address)
    balance = web3.utils.fromWei(balance, 'Ether')
    console.log("Contract.checkBalances - Ether Balance:", balance)
    return balance;
  }//end checkBalances

  module.exports = {balance, getBalance, checkBalances }
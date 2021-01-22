
  
console.log("external stinky")
 
var Web3 = require('web3');

var url="https://ropsten.infura.io/v3/4cd98623d90d401ca984c02080c6bf72";
var web3 = new Web3(url);

//cooper s - get address of metamask account
var address = '0x00c3e8976ae622C79C6e33749eF999aa9ECba3c1';

web3.eth.getBalance(address, (err,bal) =>{
  
  var eth = web3.utils.fromWei(bal, 'ether');
  console.log("Balance - ETH: ", eth )
})

web3.eth.getBalance(address, (err,bal) =>{
  
    var gwei = web3.utils.fromWei(bal, 'gwei');
    console.log("Balance - gwei: ", gwei )
  })

  web3.eth.getBalance(address, (err,bal) =>{
  
    var Gwei = web3.utils.fromWei(bal, 'Gwei');
    console.log("Balance - Gwei: ",Gwei )
  })


sampleFuncs = {
    sampleFunc1 () {
        return 'Jim';
      },
      sampleFunc2 () {
        return 'Jane';
      }
      
    } //end sampleFuncs

    const func1 = () =>{
        console.log("func1")
    }
    const func2 = () =>{
        console.log("func2") 
    }

    class sampleClass {
        constructor(height, width) {
          this.height = height;
          this.width = width;
        }
    }//end class

    module.exports = {sampleFuncs, func1, func2, sampleClass}
  
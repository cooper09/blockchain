
class helperClass {
  constructor(data1, data2){
  this.data1 = data1
  this.data2 = data2
  } 
}

const func1 = () =>{
  console.log("helper func1")
}
const func2 = () =>{
  console.log("helper func2") 
}

module.exports = {
    helperClass,
    func1,
    func2
}
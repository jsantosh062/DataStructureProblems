
Array.prototype.removeDuplicate = function () {
    console.time("calculated time")
 const uniqueArr1 =[]
for(let i=0;i<this.length; i++) {
  let bool = true;
  for(let j =0; j<uniqueArr1.length; j++) {
    if(this[i] === uniqueArr1[j] ) {
      bool = false;
      break;
    }
  }
  if(bool)uniqueArr1.push(this[i])
} 
    console.timeEnd("calculated time")

  return uniqueArr1;
}
Array.prototype.removeDuplicateUsingJavascriptPredefined = function () {
    console.time("calculated time")
 const uniqueArr1 =[]
  this.forEach((ele,index)=> {
      if(!uniqueArr1.includes(ele)) {
        uniqueArr1.push(ele)
      }
  })
    console.timeEnd("calculated time")

  return uniqueArr1;
}
function removeDuplicateFromAnArray(arr) {
  console.log('\n\n--------------- removeDuplicateFromAnArray --------------\n\n')
console.log(arr.removeDuplicate())
  console.log('\n\n--------------- removeDuplicateFromAnArray --------------\n\n')
}
function removeDuplicateUsingJavascriptPredefined(arr) {
  console.log('\n\n--------------- removeDuplicateFromAnArrayUsingJavascriptPredefined --------------\n\n')
console.log(arr.removeDuplicateUsingJavascriptPredefined())
  console.log('\n\n--------------- removeDuplicateFromAnArrayUsingJavascriptPredefined --------------\n\n')
}
module.exports = {
  removeDuplicateUsingJavascriptPredefined :removeDuplicateUsingJavascriptPredefined,
  removeDuplicateFromAnArray :removeDuplicateFromAnArray
}
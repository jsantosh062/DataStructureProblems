Array.prototype.uniqueUsingJavascriptPredefined = function()  {
  console.time("calculated time")

  const array = this.filter((ele) => {
    if (this.indexOf(ele) != this.lastIndexOf(ele)) {
      return false
    } else {
      return true
    }
  });
  console.timeEnd("calculated time")

  return array;
}

Array.prototype.uniqueWithoutUsingJavascriptPredefined = function()  {
  console.time("calculated time")
  const uniqueArr = []
  for (let i = 0; i < this.length; i++) {
    for (var j = 0; j < this.length; j++) {
      if (i === j) continue;
      if (this[i] === this[j]) break;
    }
    if (j === this.length) uniqueArr.push(this[i])
  }
  console.timeEnd("calculated time")
  return uniqueArr;

}
function returnOnlyUniqueUsingJavascriptPrdefined(arr) {
  console.log('-----------------------returnOnlyUniqueUsingJavascriptPrdefined---------------\n\n')
  console.log(arr.uniqueUsingJavascriptPredefined());
  console.log('\n\n-----------------------returnOnlyUniqueUsingJavascriptPrdefined---------------\n\n')
}

function returnOnlyUniqueWithoutUsingJavascriptPrdefined(arr) {
  console.log('-----------------------returnOnlyUniqueWithoutUsingJavascriptPrdefined---------------\n\n')
  console.log(arr.uniqueWithoutUsingJavascriptPredefined()); console.log('\n\n-----------------------returnOnlyUniqueWithoutUsingJavascriptPrdefined---------------\n\n')
}
module.exports = {
  returnOnlyUniqueUsingJavascriptPrdefined: returnOnlyUniqueUsingJavascriptPrdefined,
  returnOnlyUniqueWithoutUsingJavascriptPrdefined: returnOnlyUniqueWithoutUsingJavascriptPrdefined
}
const { returnOnlyUniqueUsingJavascriptPrdefined, returnOnlyUniqueWithoutUsingJavascriptPrdefined } =  require('./returnOnlyUniqueValueFromAnArray')
const { removeDuplicateFromAnArray,removeDuplicateUsingJavascriptPredefined } =  require('./removeDuplicateFromAnArray')

const arr = [1, 2, 4, 5, 6, 8, 8, 2, 2, 5, 4, 3, 4, 6, 9, 91, 31]

try {

returnOnlyUniqueUsingJavascriptPrdefined(arr)
  
returnOnlyUniqueWithoutUsingJavascriptPrdefined(arr)

removeDuplicateUsingJavascriptPredefined(arr)
  
removeDuplicateFromAnArray(arr)

}catch(err) {
  console.log("error =====>",err)
}


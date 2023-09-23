const { returnOnlyUniqueUsingJavascriptPrdefined, returnOnlyUniqueWithoutUsingJavascriptPrdefined } = require('./returnOnlyUniqueValueFromAnArray')
const { removeDuplicateFromAnArray, removeDuplicateUsingJavascriptPredefined } = require('./removeDuplicateFromAnArray')
const { returnOnlyCommonCharacterStringFromAnArrayOfString } = require('./returnOnlyCommonCharacterStringFromAnArrayOfString')

const arr = [1, 2, 4, 5, 6, 8, 8, 2, 2, 5, 4, 3, 4, 6, 9, 91, 31]

const arr_1 = ["santosh", "ashok", "premjoshi", "gopikishan"]

try {

  returnOnlyUniqueUsingJavascriptPrdefined(arr)

  returnOnlyUniqueWithoutUsingJavascriptPrdefined(arr)

  removeDuplicateUsingJavascriptPredefined(arr)

  removeDuplicateFromAnArray(arr)

  returnOnlyCommonCharacterStringFromAnArrayOfString(arr_1)

} catch (err) {
  console.log("error =====>", err)
}




Array.prototype.onlyCommonCharacterStringFromAnArrayOfString = function () {
    console.time("calculated time")
    const commonRandomString = "abcdefghijklmnopqrstuvwxyz";
    let commonFinalString = "";
    let counter = 0;
    let bool = false

    for (let i = 0; i < commonRandomString.length; i++) {
        for (let j = 0; j < this.length; j++) {
            for (let k = 0; k < this[j].length; k++) {
                if (this[j][k] === commonRandomString[i]) {

                    counter++
                    break;
                }

            }
            if (counter === this.length) {

                commonFinalString += commonRandomString[i];

            }
        }
        counter = 0;

    }
    console.timeEnd("calculated time");

    return commonFinalString;
}

function returnOnlyCommonCharacterStringFromAnArrayOfStringWithoutPredefined(arr) {
    console.log('\n\n--------------- onlyCommonCharacterStringFromAnArrayOfString --------------\n\n')
    console.log(arr.onlyCommonCharacterStringFromAnArrayOfString())
    console.log('\n\n--------------- onlyCommonCharacterStringFromAnArrayOfString --------------\n\n')
}



module.exports = {
    returnOnlyCommonCharacterStringFromAnArrayOfString: returnOnlyCommonCharacterStringFromAnArrayOfStringWithoutPredefined,
}

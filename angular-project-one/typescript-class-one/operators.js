var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log('************************************');
console.log('***** Operators working sound! *****');
console.log('************************************');
// Working with ...spread
// -------------------------------------------------------------------------------------------------------
var myOddNumbersArray = [1, 3, 5];
var myEvenNumbersArray = [6, 2, 4];
var myNumbersArray = myOddNumbersArray.concat(myEvenNumbersArray);
console.log(myNumbersArray);
var userName = { fName: 'John', lName: 'Nascimento' };
var userDetails = __assign({ address: '123 whatever street', mobile: '987654321', email: 'johnnascimento@example.com' }, userName);
console.log.apply(console, ['userDetails + userName'].concat(userDetails));
// Another way of passing spread opertators along is as follows:
var sum = function (a, b, c) {
    return a + b + c;
};
console.log('calling sum function out ', sum.apply(void 0, myOddNumbersArray));
console.log('sorting test ', myEvenNumbersArray.sort(function (a, b) { return a - b; }));
// Using back ticks to have a multi-line string and also call out variables/properties along the way, using $ sign
console.log("\n    user name: " + userName.fName + " " + userName.lName + ",\n    user address: " + userDetails.address + ",\n    user mobile: " + userDetails.mobile + ",\n    user email: " + userDetails.email);
// Everything applied within the back ticks are going to be considered by the console
// Working with De-structuring
// -------------------------------------------------------------------------------------------------------
var fName = userName.fName;
console.log("fName value is: " + fName);
var lName = userName.lName;
console.log("lName value is: " + lName);
var a = myOddNumbersArray[0];
console.log("A as 1: " + a);
var b = myOddNumbersArray[1];
console.log("B as 3, usind , B: " + b);
var c = myOddNumbersArray[2];
console.log("C as 5, usind , , C: " + c);
var x = myNumbersArray[0], y = myNumbersArray[1], z = myNumbersArray.slice(2);
console.log("Got x as: " + x + ", y as: " + y + " and Z as: " + z);
console.log(typeof z);

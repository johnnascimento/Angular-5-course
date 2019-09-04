console.log('************************************');
console.log("***** Working! Declarations ts *****");
console.log('************************************');
// LET
// -------------------------------------------------------------------
var myLetVar;
myLetVar = 123456;
myLetVar = 456789;
myLetVar = 7891011;
var logMyLetVar = function () {
    var myLetVar;
    myLetVar = 147;
    console.log("My let var inside the function", myLetVar);
};
console.log("My let var Ouside the function", myLetVar);
logMyLetVar();
// CONST
// -------------------------------------------------------------------
var myConstVar = true; // Must assign value at the same time as this one is defined
// myConstVar = false; // Would throw an error
var myMalleableConst = { foo: 'bar', baz: 'boo' };
console.log('my malleable constant when initialized', myMalleableConst);
myMalleableConst.foo = 'navbar'; // An internal value of a const, like in this case, can be modified.
console.log('my malleable constant after assignment', myMalleableConst);
var myMalleableConstT = ['bar', 'boo'];
console.log('my malleable constant when initialized', myMalleableConstT);
myMalleableConstT[0] = 'navbar'; // An internal value of a const, like in this case, can be modified.
console.log('my malleable constant after assignment', myMalleableConstT);
